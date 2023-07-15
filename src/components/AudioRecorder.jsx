import React, { useState } from "react";
import mic from "microphone-stream";
import { FaMicrophone, FaPaperPlane } from 'react-icons/fa';

/** Start/Stop Audio Recording  */
const AudioRecorder = ({ finishRecording }) => {
  const [recording, setRecording] = useState(false);
  const [micStream, setMicStream] = useState();
  const [audioBuffer] = useState(
    (function() {
      let buffer = [];
      function add(raw) {
        buffer = buffer.concat(...raw);
        return buffer;
      }
      function newBuffer() {
        console.log("resetting buffer");
        buffer = [];
      }

      return {
        reset: function() {
          newBuffer();
        },
        addData: function(raw) {
          return add(raw);
        },
        getData: function() {
          return buffer;
        }
      };
    })()
  );

  const startRecording = async () => {
    audioBuffer.reset();

    window.navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        const startMic = new mic();
        process.nextTick = setImmediate
        startMic.setStream(stream);
        startMic.on("data", (chunk) => {
          var raw = mic.toRaw(chunk);
          if (raw == null) {
            return;
          }
          audioBuffer.addData(raw);
        });

        setRecording(true);
        setMicStream(startMic);
      });
  };

  const stopRecording = async () => {
    micStream.stop();
    setMicStream(null);
    setRecording(false);

    const resultBuffer = audioBuffer.getData();

    if (typeof finishRecording === "function") {
      finishRecording(resultBuffer);
    }
  };

  return (
    <div>
      {!recording && 
        <button type="button" className="p-2 h-10 mt-2 bg-blue-500 text-white ml-2 rounded-md border border-blue-500" onClick={startRecording}>
          <FaMicrophone />
        </button>
      }
      {recording && 
        <button type="button" className="p-2 h-10 mt-2 bg-red-500 text-white ml-2 rounded-md border border-red-500" onClick={stopRecording}>
          <FaMicrophone />
        </button>
      }
    </div>
  );
};

export default AudioRecorder;