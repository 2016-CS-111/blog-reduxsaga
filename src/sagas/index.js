import { call, put, takeEvery } from 'redux-saga/effects';
import JSON from '../api/JsonPlaceholder';

// JsonPlaceholder API call
const fetchPostsApi = async () => {
    const response = await JSON.get('/posts');
    return response.data
}

// Worker Saga
function* workerSaga(action) {
    const posts = yield call(fetchPostsApi);
    yield put({ type: 'GET_POSTS', posts: posts });
}

// Watcher Saga
function* rootSaga() { 
    yield takeEvery('GET_POSTS_REQUESTED', workerSaga);
}

export default rootSaga;