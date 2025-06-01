# Reaper Global Playlist Counter

This is a custom script that vastly improves using reaper for live playback. It's a playlist changer that prevents you from accidentially restarting your set, while allowing full control. It basically is a wrapper for the existing reaper playback functionality that makes it far more human to use in a live scenario and prevents mistakes.

Add the lua files to ..AppData\Roaming\REAPER\Scripts
Add the js files to ..AppData\Roaming\REAPER\Effects

Then add the playlist counter as the FIRST effect on the master track

Making sure you SWS downloaded from reaper, go to the playlist panel and create 4 playlists. Now go to the actions panel and find the 'play next setlist if stopped' action. This should increment the playlist counter effect on the master track and start playing the next playlist section.
