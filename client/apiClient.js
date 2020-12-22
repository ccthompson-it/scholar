import request from 'superagent'

const rootUrl = '/api/v1/classes'

export function getClasses () {
  return request.get(rootUrl + '/all-teachers')
    .then(res => {
      return res.body
    })
}

export function getProfile () {
  return request.get(rootUrl + '/profile')
    .then(res => {
      return res.body
    })
}

