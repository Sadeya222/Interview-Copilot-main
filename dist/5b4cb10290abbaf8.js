class SpeechProcessor extends AudioWorkletProcessor{constructor(s){super(s)}process(s,e){const r=s[0],o=[];for(let c=0;c<r.length;c+=1)o[c]=r[c];return this.port.postMessage(o[0]),!0}}registerProcessor("speech-processor",SpeechProcessor);