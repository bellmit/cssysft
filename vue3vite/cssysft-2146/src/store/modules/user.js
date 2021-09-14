import { login, logout, getInfo } from '@/api/login'
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: () => ({
    token: '',
    name: '',
    avatar: '',
    buttons: [],
    roles: []
  }),
  getters: {
    token: state => state.token,
    avatar: state => state.avatar,
    name: state => state.name,
    buttons: state => state.buttons,
    roles: state => state.roles
  },
  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_BUTTONS: (state, buttons) => {
      state.buttons = buttons
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    }
  },
  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      return new Promise((resolve, reject) => {
        login(username, userInfo.password).then(response => {
          const data = response.data
          setToken(data.token)
          commit('SET_TOKEN', data.token)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 获取用户信息
    async GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo(state.token).then(response => {
          const data = response.data
          if (data.roles && data.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', data.roles)
          } else {
            reject('getInfo: roles must be a non-null array !')
          }

          const buttonAuthList = []
          data.permissionValueList.forEach(button => {
            buttonAuthList.push(button)
          })

          commit('SET_NAME', data.name)
          commit('SET_AVATAR', data.avatar)
          commit('SET_BUTTONS', buttonAuthList)
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 后台登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token).then(() => {
          commit('SET_TOKEN', '')// 清空前端vuex中存储的数据
          commit('SET_ROLES', [])// 清空前端vuex中存储的数据
          commit('SET_BUTTONS', [])
          removeToken()// 清空cookie
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    // 前端登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit('SET_TOKEN', '')
        removeToken()
        resolve()
      })
    }
  }
}

export default user
