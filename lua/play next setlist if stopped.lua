local MAX_PLAYLISTS = 5
if(reaper.GetPlayState()==0)
then
  local masterTrack = reaper.GetMasterTrack();
  local currentPlaylist = reaper.TrackFX_GetParam(masterTrack,0,0,0,100);
  if(currentPlaylist >= MAX_PLAYLISTS)
  then
    currentPlaylist = 0;
  end
  
  currentPlaylist = currentPlaylist + 1;
  
  local playlistCommandId = "_S&M_PLAY_RGN_PLAYLIST" .. math.floor(currentPlaylist);
  
  reaper.TrackFX_SetParam(masterTrack,0,0,currentPlaylist);
  reaper.Main_OnCommand(reaper.NamedCommandLookup(playlistCommandId),0);
end
