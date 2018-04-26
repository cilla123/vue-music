import * as types from './mutation-types'

const mutations = {

    // 设置歌手
    [types.SET_SINGER](state, singer){
        state.singer = singer
    },
    // 设置当前播放状态
    [types.SET_PLAYING_STATE](state, flag) {
        state.playing = flag
    },
    // 设置全屏
    [types.SET_FULL_SCREEN](state, flag) {
        state.fullScreen = flag
    },
    //设置播放列表
    [types.SET_PLAYLIST](state, list) {
        state.playlist = list
    },
    // 设置
    [types.SET_SEQUENCE_LIST](state, list) {
        state.sequenceList = list
    },
    // 设置播放状态
    [types.SET_PLAY_MODE](state, mode) {
        state.mode = mode
    },
    // 设置当前播放
    [types.SET_CURRENT_INDEX](state, index) {
        state.currentIndex = index
    },

}

export default mutations