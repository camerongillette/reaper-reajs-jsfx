desc:Xbox Button Mapper
//tags: MIDI processing

slider1:57<0,127,1>A Button
slider2:58<0,127,1>X Button
slider3:59<0,127,1>Y Button
slider4:60<0,127,1>B Button
slider5:59<0,127,1>Left Bumper
slider6:60<0,127,1>Right Bumper

in_pin:none
out_pin:none

@init 
//Midi notes for each button
//abuttonMidi=0
//xbuttonMidi=1
//ybuttonMidi=2
//bbuttonMidi=3
//pitchCC=0
memset(notetab,0,128);

@block
while (
midirecv(ts,msg1,msg23) ? 
( 
  
  m=msg1&240;
  note=msg23&127;
  (m == 8*16 || m==9*16) ? 
  (
    oldnote=note;
    note==0 ?
      note=slider1; 
    note==1 ?
      note=slider2; 
    note==2 ?
      note=slider3; 
    note==3 ?
      note=slider4;
    note==4 ?
      note=slider5;
    note==5 ?
      note=slider6;
      
    (m == 9*16 && msg23>=256) ? 
    (
      vel=(msg23/256)|0;
      note >= 0 && note < 128 ? (
        //notetab[note]|=2^(12+ note-oldnote);
        midisend(ts,9*16,note+vel*256); // send note on
      );
    ) : (m == 8*16 || m == 9*16) ? (
      note >= 0 && note < 128 ? (
        a=notetab[note];
        mask = 2^(12+note-oldnote);
        (a&mask) ? ( notetab[note] = (a-=mask));
        !a ? midisend(ts,8*16,note); // send note off  
      );
    );
  ) : 
  (
    midisend(ts,msg1,msg23);
  );
  bla=1;
);
);
@sample
