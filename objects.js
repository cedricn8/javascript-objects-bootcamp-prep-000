var playlist = {name: "Hello"}

function updatePlaylist(playlist,aname,asong) {
  playlist[aname] = asong
  return playlist
}

function removeFromPlaylist(playlist,aname) {
  delete playlist.aname
  return playlist
}