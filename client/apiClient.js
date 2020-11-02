import request from 'superagent'

const rootUrl = '/api/v1'

export function getQuotes () {
  return request.get(rootUrl + '/all-teachers')
    .then(res => {
      return res.body
    })
}

