import request from 'superagent'

const rootUrl = '/api/v1'

export function getClasses () {
  return request.get(rootUrl + '/all-teachers')
    .then(res => {
      return res.body
    })
}

