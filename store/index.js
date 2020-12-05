export const state = () => ({
  cityList: [],
  city: {},
})

export const mutations = {
  chosen(state, cityChosed) {
    state.city = cityChosed
  },
  add(state, city) {
    state.cityList.push({ ...city })
  },
  newCityList(state, cityList) {
    state.cityList = [...cityList]
  },
  remove(state, { city }) {
    state.cityList.splice(state.cityList.indexOf(city), 1)
  },
}
