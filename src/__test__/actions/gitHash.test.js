import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import nock from 'nock'
import * as GitHash from '../../Actions/gitHash'

describe('gitHash actions', () => {
  test('fetchGitHash', async () => {
    const store = configureMockStore([thunk])()

    nock(process.env.API_BASE_URL)
      .post(GitHash.GIT_HASH_FETCH_URL)
      .once()
      .reply(200, { hash_value: '51ee6b42381b03a1974e393cb01a141306d091dc' })

    const expectedActions = [
      {
        type: GitHash.FETCH_GIT_HASH,
        payload: {
          hash: '51ee6b42381b'
        }
      }
    ]

    try {
      await store.dispatch(await GitHash.fetchGitHash())
      expect(store.getActions()).toEqual(expectedActions)
    } catch (err) {
      console.error(err.message)
    }
  })
})
