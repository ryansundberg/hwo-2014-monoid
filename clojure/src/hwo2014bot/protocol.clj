(ns hwo2014bot.protocol)

(defprotocol PTrace ; Protocols are essentially Java interfaces
  (in [_ json-data])
  (out [_ json-data]))

(defprotocol PTick
  (tick [_ tick-num]))

(defprotocol PTrack
  (load-track [_ track-data]))