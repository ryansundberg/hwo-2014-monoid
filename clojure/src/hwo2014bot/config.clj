(ns hwo2014bot.config)

(def default-conf
  {:host "testserver.helloworldopen.com" ; default host, overriden by cli
   :port 8091 ; default port, overriden by cli
   :key "NBANBPb2JZyDGw"
   :name "Monoid"
   :force-qual true ; test qualification race
   :passive-timeout 30 ; ms to process passive data (leaves us 40ms for decision making)
   :trace {:dir "data/keimola"} ; optional
   :dashboard
     {:instant 3} ; # of ticks for instantaneous measurements
   :characterizer
     {}
   :throttle
     {:velocity ; mode parameters
      {:kP 1.0
       :kI 1.0
       :kD 1.0}
      :slip-magnitude
      {:kP 1.0
       :kI 1.0
       :kD 1.0}}
   :track
     {:trace false}
   :ai
     {:driver "Mario"
      :speed 6.40}
     #_{:driver "Luigi"
      :safe-angle 15.0}
     #_{:driver "Peach"        
      :speed 7.0
      :safe-angle 15.0}
     #_{:driver "Bowser"        
      :speed 8.0
      :safe-angle 15.0}
     
   
     ; different AI drivers:
     ; :mario drives at fixed speed
     ; :danica (TODO) drives at fixed speed on straights, and fixed angle on turns
     
  })
