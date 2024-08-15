(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.playAudioList([this.audio_2039C358_3071_2DE6_41BB_0CE05047F610]); this.init(); this.syncPlaylists([this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist,this.mainPlayList]); this.playList_43BCF495_5319_73EC_41D1_77D6086E0648.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarMargin": 2,
 "children": [
  "this.MainViewer",
  "this.Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
  "this.Container_0DD1BF09_1744_0507_41B3_29434E440055",
  "this.Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
  "this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
  "this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
  "this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
  "this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "id": "rootPlayer",
 "width": "100%",
 "scrollBarWidth": 10,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "buttonToggleMute": "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "borderRadius": 0,
 "minHeight": 20,
 "definitions": [{
 "class": "PlayList",
 "change": "this.showComponentsWhileMouseOver(this.container_4395C491_5319_73E4_41CD_B1FAC218469A, [this.htmltext_4397C491_5319_73E4_41BC_38CB9DB287ED,this.component_43A85491_5319_73E4_41D0_8E017D549FDF,this.component_43A88491_5319_73E4_41A0_1EE17AF83D61], 2000)",
 "items": [
  "this.albumitem_4395E491_5319_73E4_41CF_C9243669049E"
 ],
 "id": "playList_5F503ED1_52F7_CF64_41A0_07032FB6F43D"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_camera",
 "automaticRotationSpeed": 57,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -90.26,
   "yaw": 87.95,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD"
  },
  {
   "backwardYaw": -88.8,
   "yaw": 88.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E"
  },
  {
   "backwardYaw": 175.04,
   "yaw": -83.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0"
  }
 ],
 "label": "PANORAMA 03",
 "id": "panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_3B4442BA_2E84_4A8B_41A5_67F59F2C950D",
  "this.overlay_3B0DEB3E_2E84_BB88_41B0_C9981D22DB09",
  "this.overlay_3B4288C0_2E84_46F7_41B8_DB4AB888DE83",
  "this.overlay_3B45121A_2E8D_C58B_41AD_73ED47734B61"
 ],
 "thumbnailUrl": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_43BCF495_5319_73EC_41D1_77D6086E0648",
 "class": "PlayList"
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": 88.37,
   "yaw": -88.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC"
  },
  {
   "backwardYaw": 87.66,
   "yaw": -87.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD"
  },
  {
   "backwardYaw": 87.66,
   "yaw": -87.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD"
  },
  {
   "backwardYaw": -43.16,
   "yaw": 141.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3"
  }
 ],
 "label": "PANORAMA 01",
 "id": "panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_3B115ED0_2EBC_DA97_41A9_A0D2CFDCC73B",
  "this.overlay_3BD72DBB_2E83_DE89_41B3_9A5830276C0B",
  "this.overlay_3B058609_2E84_4D89_41C3_41EF038FDF8B"
 ],
 "thumbnailUrl": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": -83.98,
   "yaw": 175.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC"
  },
  {
   "panorama": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 9.38,
   "yaw": -40.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39"
  }
 ],
 "label": "PANORAMA 04",
 "id": "panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_380B3AA1_2E87_BAB9_41C0_081D6A7D05F3",
  "this.overlay_3B7FB0F2_2E84_469B_41C3_67BA9CAF0818",
  "this.overlay_3B29F8C7_2E84_C6F9_41C0_042EA8DDE4C1"
 ],
 "thumbnailUrl": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 60.15,
  "pitch": 1.79,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_426694EA_5319_7324_41A5_87761F20D5F0",
 "idleSequence": "this.sequence_4266C4EA_5319_7324_41D1_31EC60BDAC3E",
 "initialSequence": "this.sequence_4266C4EA_5319_7324_41D1_31EC60BDAC3E"
},
{
 "id": "FadeInEffect_22A2BC90_306D_6012_417E_A67B2508BBC8",
 "class": "FadeInEffect",
 "easing": "cubic_in",
 "duration": 500
},
{
 "height": 5540,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 01",
 "class": "Photo",
 "width": 15360,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_0",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_0_t.png"
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": -89.17,
   "yaw": 94.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39"
  }
 ],
 "label": "PANORAMA 10",
 "id": "panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_20F9602B_2F9B_A5FD_41C7_676DE2F81AB3"
 ],
 "thumbnailUrl": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "class": "MediaAudio",
 "audio": {
  "mp3Url": "media/audio_2039C358_3071_2DE6_41BB_0CE05047F610.mp3",
  "class": "AudioResource",
  "oggUrl": "media/audio_2039C358_3071_2DE6_41BB_0CE05047F610.ogg"
 },
 "autoplay": true,
 "id": "audio_2039C358_3071_2DE6_41BB_0CE05047F610",
 "data": {
  "label": "lotus-sky-dreams-216049"
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_5F429456_52F9_536C_41CF_12A13C169A6D_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "items": [
  {
   "media": "this.panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_camera"
  },
  {
   "media": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_camera"
  },
  {
   "media": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_camera"
  },
  {
   "media": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_camera"
  },
  {
   "media": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_camera"
  },
  {
   "media": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_camera"
  },
  {
   "media": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D_camera"
  },
  {
   "media": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_camera"
  },
  {
   "media": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_camera"
  },
  {
   "media": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_camera"
  },
  {
   "media": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
   "begin": "this.setEndToItemIndex(this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087_camera"
  }
 ],
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "class": "PlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": -122.34,
   "yaw": 144.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061"
  },
  {
   "backwardYaw": 93.44,
   "yaw": -34.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39"
  },
  {
   "panorama": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 61.69,
   "yaw": -34.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D"
  }
 ],
 "label": "PANORAMA 07",
 "id": "panorama_5D00E351_52FB_7564_41D0_5C5184794BD8",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_5D00C351_52FB_7564_41C4_9A610F326B74",
  "this.overlay_5D002351_52FB_7564_41B4_7524BD0B4212",
  "this.overlay_5D003351_52FB_7564_41BA_CD9F462D695B",
  "this.overlay_5D001351_52FB_7564_41D3_E79724BAF74F"
 ],
 "thumbnailUrl": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "label": "Album de Fotos PLANO DEL CONJUNTO",
 "class": "PhotoAlbum",
 "id": "album_202FFFCB_306C_E076_4197_E28FE284BC6C",
 "thumbnailUrl": "media/album_202FFFCB_306C_E076_4197_E28FE284BC6C_t.png",
 "playList": "this.album_202FFFCB_306C_E076_4197_E28FE284BC6C_AlbumPlayList"
},
{
 "height": 5253,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 04",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_3",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_3.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_3_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -38.69,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_42B2E508_5319_72E4_41D1_72DA61E609C0",
 "idleSequence": "this.sequence_42B2F508_5319_72E4_41D2_634FB6307910",
 "automaticRotationSpeed": 57,
 "initialSequence": "this.sequence_42B2F508_5319_72E4_41D2_634FB6307910"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.96,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_4294B4FC_5319_731C_41CC_611190F107E1",
 "idleSequence": "this.sequence_429484FC_5319_731C_41D4_3302FB014F3C",
 "initialSequence": "this.sequence_429484FC_5319_731C_41D4_3302FB014F3C"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.93,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_43E1D4AF_5319_733C_41CB_842850441C05",
 "idleSequence": "this.sequence_43E224AF_5319_733C_41C5_0789FBBDFD04",
 "initialSequence": "this.sequence_43E224AF_5319_733C_41C5_0789FBBDFD04"
},
{
 "height": 5259,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 09",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_8",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_8.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_8_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 92.78,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_43D764A9_5319_7324_41D2_16DCBCB0D8C8",
 "idleSequence": "this.sequence_43D774A9_5319_7324_41CE_803BB406B168",
 "automaticRotationSpeed": 57,
 "initialSequence": "this.sequence_43D774A9_5319_7324_41CE_803BB406B168"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.34,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_424884D8_5319_7364_41A3_4C87542CED30",
 "idleSequence": "this.sequence_424894D8_5319_7364_41CF_D71808E12B10",
 "initialSequence": "this.sequence_424894D8_5319_7364_41CF_D71808E12B10"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -131.35,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_42C1250E_5319_72FC_4193_471DA1E3D8CE",
 "idleSequence": "this.sequence_42C1050E_5319_72FC_41D0_7DAD6E372869",
 "initialSequence": "this.sequence_42C1050E_5319_72FC_41D0_7DAD6E372869"
},
{
 "items": [
  {
   "begin": "this.MapViewerMapPlayer.set('movementMode', 'constrained')",
   "media": "this.map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7",
   "class": "MapPlayListItem",
   "player": "this.MapViewerMapPlayer"
  }
 ],
 "id": "playList_43BD0495_5319_73EC_418A_D5E833CEC58E",
 "class": "PlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -35.76,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_42EF351A_5319_72E4_41C4_C6A819962F2B",
 "idleSequence": "this.sequence_42EF651A_5319_72E4_41D1_E3231F23AF8E",
 "initialSequence": "this.sequence_42EF651A_5319_72E4_41D1_E3231F23AF8E"
},
{
 "height": 5296,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 07",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_6",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_6.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_6_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.28,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_43FAC4B5_5319_732C_41C2_59F8E4C4B5FE",
 "idleSequence": "this.sequence_43FB24B5_5319_732C_41AC_3A9A61308934",
 "initialSequence": "this.sequence_43FB24B5_5319_732C_41AC_3A9A61308934"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -170.62,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_413B8537_5319_7D2C_41D2_ED0090028809",
 "idleSequence": "this.sequence_413B9537_5319_7D2C_41BD_6FCB11592DE1",
 "initialSequence": "this.sequence_413B9537_5319_7D2C_41BD_6FCB11592DE1"
},
{
 "items": [
  {
   "media": "this.panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_camera"
  },
  {
   "media": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_camera"
  },
  {
   "media": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_camera"
  },
  {
   "media": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_camera"
  },
  {
   "media": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_camera"
  },
  {
   "media": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_camera"
  },
  {
   "media": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D_camera"
  },
  {
   "media": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_camera"
  },
  {
   "media": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_camera"
  },
  {
   "media": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_camera"
  },
  {
   "media": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
   "end": "this.trigger('tourEnded')",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "class": "PanoramaPlayListItem",
   "camera": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "label": "Album de Fotos Andenes San Jos\u00e9 \u2013 01",
 "class": "PhotoAlbum",
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785",
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_t.png",
 "playList": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_AlbumPlayList"
},
{
 "id": "FadeOutEffect_22A28C90_306D_6012_41BD_3838D6AFB565",
 "class": "FadeOutEffect",
 "easing": "cubic_out",
 "duration": 500
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.63,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_423AB4D3_5319_7364_41CB_94CC4133D2BA",
 "idleSequence": "this.sequence_423A94D3_5319_7364_41CB_B7AE13F7706A",
 "initialSequence": "this.sequence_423A94D3_5319_7364_41CB_B7AE13F7706A"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.2,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_428524F5_5319_732C_41A6_C4F9BE2A07BE",
 "idleSequence": "this.sequence_428534F5_5319_732C_4195_5E7FA814039E",
 "automaticRotationSpeed": 57,
 "initialSequence": "this.sequence_428534F5_5319_732C_4195_5E7FA814039E"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": 94.07,
   "yaw": -118.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39"
  },
  {
   "backwardYaw": -34.72,
   "yaw": 61.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8"
  },
  {
   "panorama": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "PANORAMA 06",
 "id": "panorama_5F429456_52F9_536C_41CF_12A13C169A6D",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_5F42B456_52F9_536C_41BC_CE78096606FA",
  "this.overlay_5F42A456_52F9_536C_41A7_B98C92D5ED98",
  "this.overlay_5F42D456_52F9_536C_41D0_A179D567371E",
  "this.overlay_5F42C456_52F9_536C_41D4_8C46E908C86B",
  "this.overlay_5F42F456_52F9_536C_41C5_473C960B81D7"
 ],
 "thumbnailUrl": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "height": 5253,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 05",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_4",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_4.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_4_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.84,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_425674E4_5319_732C_41AD_95F42FF7424A",
 "idleSequence": "this.sequence_425644E4_5319_732C_4195_9682B13B0015",
 "initialSequence": "this.sequence_425644E4_5319_732C_4195_9682B13B0015"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.95,
   "yaw": -90.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC"
  },
  {
   "backwardYaw": -87.22,
   "yaw": 87.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E"
  },
  {
   "panorama": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "PANORAMA 02",
 "id": "panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_3B22F5C4_2E84_CEFF_41BE_4211FC89F023",
  "this.overlay_3B3F9819_2E84_4589_41B3_F5AE1E54ECDC",
  "this.overlay_3B41857F_2E85_CF87_414B_F22854AAF4DF"
 ],
 "thumbnailUrl": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "height": 720,
 "duration": 5000,
 "label": "PLANO DEL CONJUNTO",
 "class": "Photo",
 "width": 1280,
 "id": "album_202FFFCB_306C_E076_4197_E28FE284BC6C_0",
 "image": {
  "levels": [
   {
    "url": "media/album_202FFFCB_306C_E076_4197_E28FE284BC6C_0.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_202FFFCB_306C_E076_4197_E28FE284BC6C_0_t.png"
},
{
 "hfovMax": 30,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8",
   "class": "AdjacentPanorama"
  },
  {
   "panorama": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0",
   "class": "AdjacentPanorama"
  }
 ],
 "label": "PLANTA CONJUNTO ",
 "id": "panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240",
 "thumbnailUrl": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_t.jpg",
 "overlays": [
  "this.overlay_3FA58985_2E8C_C779_41A3_5A26F7281CF2",
  "this.overlay_3098EE73_2E84_DD98_4198_1B9AD8D23405",
  "this.overlay_0EE95741_2E85_CBF9_4191_D60707B421B6",
  "this.overlay_3092C365_2E84_4BB9_4171_B260A8D1ECD6",
  "this.overlay_300BCBBA_2E84_5A88_41C2_6F1D52371963",
  "this.overlay_0E95BFA5_2E87_BAB8_41A6_D9E31FA57371",
  "this.overlay_30A61CC7_2E85_DEF9_41A6_BF7FA35CA608",
  "this.overlay_3064B2DD_2E84_CA89_41C5_8DBC000DBDF3",
  "this.overlay_30B38FDE_2E84_5A8B_4194_A6139D5D9DF4",
  "this.overlay_30B4CDA2_2E9C_7EBB_41B0_477A457AC933"
 ],
 "vfov": 14.5,
 "hfov": 30,
 "partial": true,
 "frames": [
  {
   "thumbnailUrl": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_t.jpg",
   "front": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/0/{row}_{column}.jpg",
      "rowCount": 82,
      "tags": "ondemand",
      "colCount": 82,
      "width": 41984,
      "class": "TiledImageResourceLevel",
      "height": 41984
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/1/{row}_{column}.jpg",
      "rowCount": 41,
      "tags": "ondemand",
      "colCount": 41,
      "width": 20992,
      "class": "TiledImageResourceLevel",
      "height": 20992
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/2/{row}_{column}.jpg",
      "rowCount": 21,
      "tags": "ondemand",
      "colCount": 21,
      "width": 10752,
      "class": "TiledImageResourceLevel",
      "height": 10752
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/3/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/4/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/5/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/6/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0/f/7/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "pitch": 0,
 "class": "Panorama"
},
{
 "height": 5253,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 03",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_2",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_2.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_2_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 45.81,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_42D09514_5319_72EC_41AB_D764E69D45DA",
 "idleSequence": "this.sequence_42D0E514_5319_72EC_41C4_1876F6732CCF",
 "initialSequence": "this.sequence_42D0E514_5319_72EC_41C4_1876F6732CCF"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 89.74,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_427654F0_5319_7324_41C1_B9FBEF6D2DBA",
 "idleSequence": "this.sequence_4276A4F0_5319_7324_41D2_398D88C965AE",
 "initialSequence": "this.sequence_4276A4F0_5319_7324_41D2_398D88C965AE"
},
{
 "height": 5259,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 02",
 "class": "Photo",
 "width": 10880,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_1",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_1.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_1_t.png"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.57,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_420254C1_5319_7364_41BA_4232BF8DA969",
 "idleSequence": "this.sequence_4202A4C1_5319_7364_41CC_99B8ADD247E6",
 "initialSequence": "this.sequence_4202A4C1_5319_7364_41CC_99B8ADD247E6"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_3C16462C_2D96_7A6B_41AE_F29343272087_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "movementMode": "constrained",
 "viewerArea": "this.MapViewer",
 "id": "MapViewerMapPlayer",
 "class": "MapPlayer"
},
{
 "height": 5120,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 08",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_7",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_7.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_7_t.png"
},
{
 "levels": [
  {
   "url": "media/zoomImage_20E6AA85_306D_E0F3_41C4_CC679D8A1E24_0_0.png",
   "width": 1280,
   "class": "ImageResourceLevel",
   "height": 720
  },
  {
   "url": "media/zoomImage_20E6AA85_306D_E0F3_41C4_CC679D8A1E24_0_1.png",
   "width": 1024,
   "class": "ImageResourceLevel",
   "height": 576
  },
  {
   "url": "media/zoomImage_20E6AA85_306D_E0F3_41C4_CC679D8A1E24_0_2.png",
   "width": 512,
   "class": "ImageResourceLevel",
   "height": 288
  }
 ],
 "id": "ImageResource_22A2DC90_306D_6012_41C1_A1E5502E73BD",
 "class": "ImageResource"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 57.66,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_42FEF51F_5319_7D1C_41D0_7FD126993309",
 "idleSequence": "this.sequence_42FED51F_5319_7D1C_41B1_CE32EF9B283A",
 "initialSequence": "this.sequence_42FED51F_5319_7D1C_41B1_CE32EF9B283A"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.34,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_425864DE_5319_731C_41C1_D92D23E35C54",
 "idleSequence": "this.sequence_425844DE_5319_731C_41D3_BD83EC115ED5",
 "initialSequence": "this.sequence_425844DE_5319_731C_41D3_BD83EC115ED5"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.02,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_412BA531_5319_7D24_4194_26DFF0471B67",
 "idleSequence": "this.sequence_412BB531_5319_7D24_41A8_811DCB583997",
 "initialSequence": "this.sequence_412BB531_5319_7D24_41A8_811DCB583997"
},
{
 "items": [
  {
   "media": "this.album_202FFFCB_306C_E076_4197_E28FE284BC6C",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_43BD7495_5319_73EC_41D2_FDEF8318C012",
 "class": "PlayList"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 23
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 0.68,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 0.02,
    "path": "shortest"
   },
   {
    "targetYaw": 2.83,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 0.02,
    "path": "shortest"
   },
   {
    "targetYaw": 3.5,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 0.02,
    "path": "shortest"
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -92.05,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_43DEC4A3_5319_7324_41B4_E302EF975354",
 "idleSequence": "this.sequence_43DED4A3_5319_7324_41D2_22D627482AB0",
 "initialSequence": "this.sequence_43DED4A3_5319_7324_41D2_22D627482AB0"
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "panorama": "this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD",
   "class": "AdjacentPanorama"
  },
  {
   "backwardYaw": -134.19,
   "yaw": 48.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3"
  },
  {
   "backwardYaw": 144.24,
   "yaw": -122.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8"
  }
 ],
 "label": "PANORAMA 08",
 "id": "panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_5C1CE6D7_52FB_7F6C_41A6_D0DCD3C6C014",
  "this.overlay_5C1CF6D7_52FB_7F6C_41D0_AA771D9CDF7F",
  "this.overlay_5C1CD6D7_52FB_7F6C_41D3_26DC40C596B6"
 ],
 "thumbnailUrl": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "height": 5296,
 "duration": 5000,
 "label": "Andenes San Jos\u00e9 \u2013 06",
 "class": "Photo",
 "width": 7680,
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_5",
 "image": {
  "levels": [
   {
    "url": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_5.png",
    "class": "ImageResourceLevel"
   }
  ],
  "class": "ImageResource"
 },
 "thumbnailUrl": "media/album_261E74CE_3025_83E2_41C6_BC97B5AAA785_5_t.png"
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": 141.31,
   "yaw": -43.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E"
  },
  {
   "backwardYaw": 48.65,
   "yaw": -134.19,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061"
  }
 ],
 "label": "PANORAMA 09",
 "id": "panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_5FB48895_52F9_73EC_41CE_FD8F8F029462",
  "this.overlay_5FB4F896_52F9_73EC_41BA_5B1BFA866847"
 ],
 "thumbnailUrl": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -118.31,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_411D652B_5319_7D24_41D3_A5848B36101C",
 "idleSequence": "this.sequence_411D752B_5319_7D24_41CF_7A30D53E5A48",
 "initialSequence": "this.sequence_411D752B_5319_7D24_41CF_7A30D53E5A48"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear",
    "yawSpeed": 7.96
   },
   {
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out",
    "yawSpeed": 7.96
   }
  ]
 }
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 61.44,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_422A94CD_5319_737C_41C6_0EF37551F379",
 "idleSequence": "this.sequence_422AF4CD_5319_737C_41CB_4298424B813B",
 "initialSequence": "this.sequence_422AF4CD_5319_737C_41CB_4298424B813B"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 90.83,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_42A2D502_5319_72E4_41D2_56F990FFEA61",
 "idleSequence": "this.sequence_42A30502_5319_72E4_41CE_02717290B441",
 "initialSequence": "this.sequence_42A30502_5319_72E4_41CE_02717290B441"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 145.55,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_421F04C7_5319_736C_41C3_FAA0B01F1BC4",
 "idleSequence": "this.sequence_421F74C7_5319_736C_41B8_9B8CA0BDC353",
 "initialSequence": "this.sequence_421F74C7_5319_736C_41B8_9B8CA0BDC353"
},
{
 "titleFontColor": "#000000",
 "data": {
  "name": "Window15479"
 },
 "shadowSpread": 1,
 "id": "window_26B06E46_302D_9EE3_41C2_C28E105F1646",
 "width": 400,
 "veilOpacity": 0.4,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "closeButtonBackgroundColor": [],
 "titlePaddingTop": 5,
 "overflow": "scroll",
 "bodyPaddingRight": 0,
 "closeButtonIconColor": "#B2B2B2",
 "minHeight": 20,
 "headerBackgroundColorDirection": "vertical",
 "headerBackgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "veilColorDirection": "horizontal",
 "paddingLeft": 0,
 "closeButtonBackgroundColorRatios": [],
 "propagateClick": false,
 "modal": true,
 "backgroundColor": [],
 "closeButtonRollOverIconColor": "#FFFFFF",
 "verticalAlign": "middle",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "footerBackgroundColorDirection": "vertical",
 "titleFontWeight": "normal",
 "scrollBarColor": "#000000",
 "titleFontStyle": "normal",
 "bodyPaddingLeft": 0,
 "title": "",
 "height": 600,
 "headerBorderSize": 0,
 "closeButtonPressedBackgroundColor": [],
 "contentOpaque": false,
 "borderSize": 0,
 "titlePaddingRight": 5,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "bodyBackgroundColor": [
  "#FFFFFF",
  "#DDDDDD",
  "#FFFFFF"
 ],
 "closeButtonBorderRadius": 11,
 "titleFontSize": "1.29vmin",
 "closeButtonPressedIconColor": "#FFFFFF",
 "veilShowEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerPaddingTop": 10,
 "footerHeight": 5,
 "veilColor": [
  "#000000",
  "#000000"
 ],
 "veilColorRatios": [
  0,
  1
 ],
 "shadow": true,
 "headerPaddingBottom": 5,
 "titleTextDecoration": "none",
 "bodyPaddingTop": 0,
 "titlePaddingBottom": 5,
 "footerBackgroundOpacity": 0,
 "headerPaddingLeft": 10,
 "shadowBlurRadius": 6,
 "children": [
  "this.container_4395C491_5319_73E4_41CD_B1FAC218469A"
 ],
 "bodyBackgroundOpacity": 0,
 "shadowColor": "#000000",
 "headerPaddingRight": 0,
 "paddingRight": 0,
 "shadowOpacity": 0.5,
 "closeButtonRollOverBackgroundColorRatios": [
  0
 ],
 "headerBackgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "closeButtonIconHeight": 20,
 "closeButtonIconLineWidth": 2,
 "borderRadius": 5,
 "closeButtonPressedIconLineWidth": 3,
 "class": "Window",
 "bodyBackgroundColorRatios": [
  0,
  0.5,
  1
 ],
 "backgroundColorRatios": [],
 "veilHideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "closeButtonIconWidth": 20,
 "titlePaddingLeft": 5,
 "shadowVerticalLength": 0,
 "headerBackgroundOpacity": 0,
 "shadowHorizontalLength": 3,
 "closeButtonPressedBackgroundColorRatios": [
  0
 ],
 "footerBackgroundColorRatios": [
  0,
  0.9,
  1
 ],
 "gap": 10,
 "headerBorderColor": "#000000",
 "paddingTop": 0,
 "layout": "vertical",
 "footerBackgroundColor": [
  "#FFFFFF",
  "#EEEEEE",
  "#DDDDDD"
 ],
 "bodyBackgroundColorDirection": "vertical",
 "bodyPaddingBottom": 0,
 "paddingBottom": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 500
 },
 "headerVerticalAlign": "middle",
 "closeButtonRollOverBackgroundColor": [],
 "scrollBarMargin": 2,
 "titleFontFamily": "Arial"
},
{
 "touchControlMode": "drag_acceleration",
 "buttonCardboardView": "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "gyroscopeVerticalDraggingEnabled": false,
 "viewerArea": "this.MainViewer",
 "id": "MainViewerPanoramaPlayer",
 "class": "PanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_rotation",
 "gyroscopeEnabled": true
},
{
 "fieldOfViewOverlayOutsideColor": "#000000",
 "fieldOfViewOverlayInsideOpacity": 0.4,
 "maximumZoomFactor": 1.2,
 "fieldOfViewOverlayRadiusScale": 0.3,
 "initialZoomFactor": 1,
 "label": "PLANO DEL CONJUNTO",
 "class": "Map",
 "minimumZoomFactor": 0.5,
 "fieldOfViewOverlayInsideColor": "#FFFFFF",
 "scaleMode": "fit_inside",
 "id": "map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7",
 "image": {
  "levels": [
   {
    "url": "media/map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7.png",
    "width": 1280,
    "class": "ImageResourceLevel",
    "height": 720
   },
   {
    "url": "media/map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7_lq.png",
    "width": 341,
    "class": "ImageResourceLevel",
    "tags": "preload",
    "height": 192
   }
  ],
  "class": "ImageResource"
 },
 "width": 1280,
 "thumbnailUrl": "media/map_3EE5BCEE_3065_E00E_41C4_53783B7B67F7_t.png",
 "fieldOfViewOverlayOutsideOpacity": 0,
 "height": 720
},
{
 "hfovMax": 110,
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.4,
   "yaw": 9.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0"
  },
  {
   "backwardYaw": 94.43,
   "yaw": -89.17,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087"
  },
  {
   "backwardYaw": -34.45,
   "yaw": 93.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8"
  },
  {
   "backwardYaw": -118.56,
   "yaw": 94.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D"
  }
 ],
 "label": "PANORAMA 05",
 "id": "panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39",
 "hfovMin": "120%",
 "overlays": [
  "this.overlay_3B9D22B7_2EBC_CA98_41B3_765214AE800F",
  "this.overlay_3A5EDD89_2EBC_FE89_41C5_501854585DF3",
  "this.overlay_3BF1E4F5_2EBC_CE99_41BD_15F21823A792",
  "this.overlay_3B32EB7C_2E85_FB8F_41C6_8EA7053DBBF6"
 ],
 "thumbnailUrl": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_t.jpg",
 "vfov": 180,
 "hfov": 360,
 "class": "Panorama",
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/f/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/f/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/f/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/f/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/f/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/u/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/u/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/u/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/u/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/u/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/r/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/r/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/r/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/r/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/r/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/b/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/b/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/b/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/b/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/b/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/d/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/d/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/d/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/d/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/d/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame",
   "left": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/l/0/{row}_{column}.jpg",
      "rowCount": 11,
      "tags": "ondemand",
      "colCount": 11,
      "width": 5632,
      "class": "TiledImageResourceLevel",
      "height": 5632
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/l/1/{row}_{column}.jpg",
      "rowCount": 6,
      "tags": "ondemand",
      "colCount": 6,
      "width": 3072,
      "class": "TiledImageResourceLevel",
      "height": 3072
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/l/2/{row}_{column}.jpg",
      "rowCount": 3,
      "tags": "ondemand",
      "colCount": 3,
      "width": 1536,
      "class": "TiledImageResourceLevel",
      "height": 1536
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/l/3/{row}_{column}.jpg",
      "rowCount": 2,
      "tags": "ondemand",
      "colCount": 2,
      "width": 1024,
      "class": "TiledImageResourceLevel",
      "height": 1024
     },
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0/l/4/{row}_{column}.jpg",
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "colCount": 1,
      "width": 512,
      "class": "TiledImageResourceLevel",
      "height": 512
     }
    ],
    "class": "ImageResource"
   }
  }
 ],
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -86.56,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 40,
 "timeToIdle": 5000,
 "id": "camera_410D6525_5319_7D2C_41CB_C22E7A63F725",
 "idleSequence": "this.sequence_410D7525_5319_7D2C_41AD_D956B4936D22",
 "initialSequence": "this.sequence_410D7525_5319_7D2C_41AD_D956B4936D22"
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 139.6,
  "pitch": 0,
  "hfov": 100
 },
 "class": "PanoramaCamera",
 "manualZoomSpeed": 4,
 "automaticZoomSpeed": 10,
 "timeToIdle": 5000,
 "id": "camera_43F754BB_5319_7324_41CD_00C694F1FB41",
 "idleSequence": "this.sequence_43F784BB_5319_7324_41C2_449AA5182E71",
 "initialSequence": "this.sequence_43F784BB_5319_7324_41C2_449AA5182E71"
},
{
 "items": [
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785",
   "player": "this.MainViewerPhotoAlbumPlayer",
   "class": "PhotoAlbumPlayListItem"
  }
 ],
 "id": "playList_43BCD495_5319_73EC_41C5_297EF1BBD2F5",
 "class": "PlayList"
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MainViewer",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 0,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Georgia",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": true,
 "toolTipTextShadowOpacity": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#FFFFFF",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#000000",
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 55,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 10,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 10,
 "toolTipPaddingTop": 7,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 0.5,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 7,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 13,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Main Viewer"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
  "this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE"
 ],
 "id": "Container_EF8F8BD8_E386_8E03_41E3_4CF7CC1F4D8E",
 "width": 115.05,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "top": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 641,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--SETTINGS"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Image_2041F0F4_2E8D_C69F_41B7_C1074AD35A4F"
 ],
 "id": "Container_0DD1BF09_1744_0507_41B3_29434E440055",
 "left": 30,
 "width": 573,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": 15,
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 133,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--STICKER"
 }
},
{
 "backgroundImageUrl": "skin/Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48.png",
 "children": [
  "this.Image_1B99DD00_16C4_0505_41B3_51F09727447A",
  "this.Container_1B99BD00_16C4_0505_41A4_A3C2452B0288"
 ],
 "id": "Container_1B9AAD00_16C4_0505_41B5_6F4AE0747E48",
 "left": "0%",
 "scrollBarMargin": 2,
 "backgroundOpacity": 0.64,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": 0,
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 118,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "--MENU"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
  "this.Container_23F097B8_0C0A_629D_4176_D87C90BA32B6"
 ],
 "id": "Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--INFO photoalbum"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_39A197B1_0C06_62AF_419A_D15E4DDD2528"
 ],
 "id": "Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PANORAMA LIST"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3"
 ],
 "id": "Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--FLOORPLAN"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536"
 ],
 "id": "Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E",
 "left": "0%",
 "backgroundOpacity": 0.6,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "creationPolicy": "inAdvance",
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "--PHOTOALBUM"
 }
},
{
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "class": "UIComponent",
 "minWidth": 0,
 "backgroundColor": [
  "#000000"
 ],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "data": {
  "name": "UIComponent2923"
 }
},
{
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "right": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": 0,
 "backgroundColorRatios": [],
 "propagateClick": false,
 "bottom": 0,
 "paddingLeft": 0,
 "class": "ZoomImage",
 "minWidth": 0,
 "backgroundColor": [],
 "borderSize": 0,
 "paddingTop": 0,
 "backgroundColorDirection": "vertical",
 "scaleMode": "custom",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "ZoomImage2924"
 }
},
{
 "iconWidth": 20,
 "id": "closeButtonPopupPanorama",
 "fontFamily": "Arial",
 "backgroundOpacity": 0.3,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 5,
 "right": 10,
 "iconHeight": 20,
 "borderRadius": 0,
 "minHeight": 0,
 "borderColor": "#000000",
 "pressedIconColor": "#888888",
 "top": 10,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "propagateClick": false,
 "iconColor": "#000000",
 "paddingLeft": 5,
 "class": "CloseButton",
 "verticalAlign": "middle",
 "rollOverIconColor": "#666666",
 "minWidth": 0,
 "mode": "push",
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "fontSize": "1.29vmin",
 "label": "",
 "shadowSpread": 1,
 "fontStyle": "normal",
 "paddingTop": 5,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "horizontal",
 "iconLineWidth": 5,
 "paddingBottom": 5,
 "shadow": false,
 "iconBeforeLabel": true,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "CloseButton2925"
 },
 "shadowBlurRadius": 6
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton MUTE"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 58,
 "pressedIconURL": "skin/IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton FULLSCREEN"
 }
},
{
 "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785",
 "class": "PhotoAlbumPlayListItem",
 "begin": "this.updateMediaLabelFromPlayList(this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_AlbumPlayList, this.htmltext_4397C491_5319_73E4_41BC_38CB9DB287ED, this.albumitem_4395E491_5319_73E4_41CF_C9243669049E); this.loopAlbum(this.playList_5F503ED1_52F7_CF64_41A0_07032FB6F43D, 0)",
 "player": "this.viewer_uid43959491_5319_73E4_41CF_4686718688F6PhotoAlbumPlayer",
 "id": "albumitem_4395E491_5319_73E4_41CF_C9243669049E"
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0, this.camera_4294B4FC_5319_731C_41CC_611190F107E1); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A1CC30_2E9F_FD98_4189_27EFB21A59CC",
   "yaw": -83.98,
   "pitch": -10.96,
   "hfov": 8.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3B4442BA_2E84_4A8B_41A5_67F59F2C950D",
 "maps": [
  {
   "yaw": -83.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.96,
   "hfov": 8.63
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD, this.camera_427654F0_5319_7324_41C1_B9FBEF6D2DBA); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A18C30_2E9F_FD98_418A_7B33C15F0216",
   "yaw": 87.95,
   "pitch": -10.7,
   "hfov": 8.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B0DEB3E_2E84_BB88_41B0_C9981D22DB09",
 "maps": [
  {
   "yaw": 87.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -10.7,
   "hfov": 8.64
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E, this.camera_428524F5_5319_732C_41A6_C4F9BE2A07BE); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A16C30_2E9F_FD98_41C3_422591155A46",
   "yaw": 88.37,
   "pitch": -4.97,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B4288C0_2E84_46F7_41B8_DB4AB888DE83",
 "maps": [
  {
   "yaw": 88.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.97,
   "hfov": 4.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D, this.camera_426694EA_5319_7324_41A5_87761F20D5F0); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A0DC30_2E9F_FD98_41C3_5FDDF87FCC72",
   "yaw": -92.65,
   "pitch": -12.06,
   "hfov": 8.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3B45121A_2E8D_C58B_41AD_73ED47734B61",
 "maps": [
  {
   "yaw": -92.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_6_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.06,
   "hfov": 8.6
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3, this.camera_425674E4_5319_732C_41AD_95F42FF7424A); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BC1C2F_2E9F_FD88_41AE_0FE758A62111",
   "yaw": 141.31,
   "pitch": -13.36,
   "hfov": 8.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3B115ED0_2EBC_DA97_41A9_A0D2CFDCC73B",
 "maps": [
  {
   "yaw": 141.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.36,
   "hfov": 8.55
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Right-Up"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD, this.camera_425864DE_5319_731C_41C1_D92D23E35C54); this.mainPlayList.set('selectedIndex', 2); this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BFEC30_2E9F_FD98_419A_3A138ECFFB5C",
   "yaw": -87.22,
   "pitch": -12.49,
   "hfov": 8.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BD72DBB_2E83_DE89_41B3_9A5830276C0B",
 "maps": [
  {
   "yaw": -87.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -12.49,
   "hfov": 8.58
  }
 ],
 "data": {
  "label": "Arrow 06a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC, this.camera_423AB4D3_5319_7364_41CB_94CC4133D2BA); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BF7C30_2E9F_FD98_41BD_17C8E1E18862",
   "yaw": -88.8,
   "pitch": -4.48,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B058609_2E84_4D89_41C3_41EF038FDF8B",
 "maps": [
  {
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_6_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.48,
   "hfov": 4.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
 "width": "12%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_rollover.png",
 "iconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
 "width": "14.22%",
 "right": 10,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510.png",
 "pressedIconURL": "skin/IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton >"
 }
},
{
 "maxHeight": 150,
 "maxWidth": 150,
 "id": "IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
 "width": "12%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 70,
 "rollOverIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_rollover.png",
 "iconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 70,
 "mode": "push",
 "height": "8%",
 "pressedIconURL": "skin/IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton <"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
 "left": 10,
 "width": "14.22%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_rollover.png",
 "top": "20%",
 "propagateClick": false,
 "bottom": "20%",
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "iconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482.png",
 "pressedIconURL": "skin/IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton <"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A09C30_2E9F_FD98_418C_C1B6F4D321A6",
   "yaw": -32.73,
   "pitch": -9.26,
   "hfov": 7.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_380B3AA1_2E87_BAB9_41C0_081D6A7D05F3",
 "maps": [
  {
   "yaw": -32.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.26,
   "hfov": 7.59
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39, this.camera_413B8537_5319_7D2C_41D2_ED0090028809); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A04C30_2E9F_FD98_41C3_AA769146DD3B",
   "yaw": -40.4,
   "pitch": -13.68,
   "hfov": 8.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3B7FB0F2_2E84_469B_41C3_67BA9CAF0818",
 "maps": [
  {
   "yaw": -40.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.68,
   "hfov": 8.54
  }
 ],
 "data": {
  "label": "Circle Arrow 01a Left-UP"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC, this.camera_412BA531_5319_7D24_4194_26DFF0471B67); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A02C30_2E9F_FD98_41B2_FE2AB0C3943A",
   "yaw": 175.04,
   "pitch": -6.66,
   "hfov": 4.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B29F8C7_2E84_C6F9_41C0_042EA8DDE4C1",
 "maps": [
  {
   "yaw": 175.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.66,
   "hfov": 4.36
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_4266C4EA_5319_7324_41D1_31EC60BDAC3E",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39, this.camera_42A2D502_5319_72E4_41D2_56F990FFEA61); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3C8757D9_2FAF_EA5D_41B8_1B7578C45517",
   "yaw": 94.43,
   "pitch": -3.59,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_20F9602B_2F9B_A5FD_41C7_676DE2F81AB3",
 "maps": [
  {
   "yaw": 94.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.59,
   "hfov": 4.39
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D, this.camera_411D652B_5319_7D24_41D3_A5848B36101C); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C375220_52FF_7724_41C6_8F963ABBEE54",
   "yaw": -34.72,
   "pitch": -7.95,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D00C351_52FB_7564_41C4_9A610F326B74",
 "maps": [
  {
   "yaw": -34.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.95,
   "hfov": 8.7
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39, this.camera_410D6525_5319_7D2C_41CB_C22E7A63F725); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C37F220_52FF_7724_4187_7569443ECCE4",
   "yaw": -34.45,
   "pitch": -2.91,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D002351_52FB_7564_41B4_7524BD0B4212",
 "maps": [
  {
   "yaw": -34.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.91,
   "hfov": 4.39
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C362220_52FF_7724_414B_ED540E1EBBC0",
   "yaw": 54.95,
   "pitch": -9.06,
   "hfov": 8.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5D003351_52FB_7564_41BA_CD9F462D695B",
 "maps": [
  {
   "yaw": 54.95,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.06,
   "hfov": 8.68
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061, this.camera_42FEF51F_5319_7D1C_41D0_7FD126993309); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C367220_52FF_7724_41B5_93AD5709E474",
   "yaw": 144.24,
   "pitch": -5.83,
   "hfov": 4.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5D001351_52FB_7564_41D3_E79724BAF74F",
 "maps": [
  {
   "yaw": 144.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.83,
   "hfov": 4.37
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Left-Up"
 }
},
{
 "items": [
  {
   "media": "this.album_202FFFCB_306C_E076_4197_E28FE284BC6C_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_202FFFCB_306C_E076_4197_E28FE284BC6C_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42B2F508_5319_72E4_41D2_634FB6307910",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_429484FC_5319_731C_41D4_3302FB014F3C",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_43E224AF_5319_733C_41C5_0789FBBDFD04",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_43D774A9_5319_7324_41CE_803BB406B168",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_424894D8_5319_7364_41CF_D71808E12B10",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42C1050E_5319_72FC_41D0_7DAD6E372869",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42EF651A_5319_72E4_41D1_E3231F23AF8E",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_43FB24B5_5319_732C_41AC_3A9A61308934",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_413B9537_5319_7D2C_41BD_6FCB11592DE1",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "items": [
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_0",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_1",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_2",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_3",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_4",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_5",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_6",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_7",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  },
  {
   "media": "this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_8",
   "class": "PhotoPlayListItem",
   "camera": {
    "initialPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1,
     "y": "0.50"
    },
    "class": "MovementPhotoCamera",
    "easing": "linear",
    "targetPosition": {
     "x": "0.50",
     "class": "PhotoCameraPosition",
     "zoomFactor": 1.1,
     "y": "0.50"
    },
    "duration": 5000,
    "scaleMode": "fit_outside"
   }
  }
 ],
 "id": "album_261E74CE_3025_83E2_41C6_BC97B5AAA785_AlbumPlayList",
 "class": "PhotoPlayList"
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_423A94D3_5319_7364_41CB_B7AE13F7706A",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_428534F5_5319_732C_4195_5E7FA814039E",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C31D21F_52FF_771C_41D2_096307092988",
   "yaw": -24.19,
   "pitch": -16.61,
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F42B456_52F9_536C_41BC_CE78096606FA",
 "maps": [
  {
   "yaw": -24.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_0_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.61,
   "hfov": 8.42
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8, this.camera_43FAC4B5_5319_732C_41C2_59F8E4C4B5FE); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C30021F_52FF_771C_41C7_C16A6012D60A",
   "yaw": 61.69,
   "pitch": -6.87,
   "hfov": 8.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F42A456_52F9_536C_41A7_B98C92D5ED98",
 "maps": [
  {
   "yaw": 61.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.87,
   "hfov": 8.73
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C30A220_52FF_7724_41D2_89BB5885AE03",
   "yaw": 61.77,
   "pitch": -2.94,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F42D456_52F9_536C_41D0_A179D567371E",
 "maps": [
  {
   "yaw": 61.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.94,
   "hfov": 4.39
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39, this.camera_43E1D4AF_5319_733C_41CB_842850441C05); this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C30E220_52FF_7724_41CB_BC585DB36354",
   "yaw": -118.56,
   "pitch": -8.33,
   "hfov": 8.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F42C456_52F9_536C_41D4_8C46E908C86B",
 "maps": [
  {
   "yaw": -118.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -8.33,
   "hfov": 8.7
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C373220_52FF_7724_41D4_3066DA62C6AC",
   "yaw": -118.24,
   "pitch": -4.01,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5F42F456_52F9_536C_41C5_473C960B81D7",
 "maps": [
  {
   "yaw": -118.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.01,
   "hfov": 4.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_425644E4_5319_732C_4195_9682B13B0015",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E, this.camera_43D764A9_5319_7324_41D2_16DCBCB0D8C8); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BF0C30_2E9F_FD98_41C6_1591634F027E",
   "yaw": 87.66,
   "pitch": -13.07,
   "hfov": 8.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B22F5C4_2E84_CEFF_41BE_4211FC89F023",
 "maps": [
  {
   "yaw": 87.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -13.07,
   "hfov": 8.56
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC, this.camera_43DEC4A3_5319_7324_41B4_E302EF975354); this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BE9C30_2E9F_FD98_41BD_97766E95C2D3",
   "yaw": -90.26,
   "pitch": -9.9,
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B3F9819_2E84_4589_41B3_F5AE1E54ECDC",
 "maps": [
  {
   "yaw": -90.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_4_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.9,
   "hfov": 8.66
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30BE7C30_2E9F_FD98_41B1_7608236C3397",
   "yaw": -90.62,
   "pitch": -4.73,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B41857F_2E85_CF87_414B_F22854AAF4DF",
 "maps": [
  {
   "yaw": -90.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_5_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -4.73,
   "hfov": 4.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01a"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_3B154D1D_2E9C_5F89_41AE_A8C38AE4DD3C",
   "yaw": 4.19,
   "pitch": 2.25,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3FA58985_2E8C_C779_41A3_5A26F7281CF2",
 "maps": [
  {
   "yaw": 4.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 2.25,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Arrow 01"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4A4B80_2E9C_FB77_41B0_C55B8C545D36",
   "yaw": 8.98,
   "pitch": 0.27,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3098EE73_2E84_DD98_4198_1B9AD8D23405",
 "maps": [
  {
   "yaw": 8.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_1_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.27,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4A0B80_2E9C_FB77_41C2_A7CC424BA3CA",
   "yaw": -10.59,
   "pitch": -0.84,
   "hfov": 0.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0EE95741_2E85_CBF9_4191_D60707B421B6",
 "maps": [
  {
   "yaw": -10.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_2_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -0.84,
   "hfov": 0.74
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 3)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4ADB81_2E9C_FB79_41C4_24B378E2F355",
   "yaw": 0.85,
   "pitch": 0.79,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3092C365_2E84_4BB9_4171_B260A8D1ECD6",
 "maps": [
  {
   "yaw": 0.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_3_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.79,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4AEB81_2E9C_FB79_41C7_435CE3D6C645",
   "yaw": -1.76,
   "pitch": 0.28,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_300BCBBA_2E84_5A88_41C2_6F1D52371963",
 "maps": [
  {
   "yaw": -1.76,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_4_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 0.28,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4ACB81_2E9C_FB79_41A2_CC87EC1DFB9C",
   "yaw": 2.52,
   "pitch": 1.66,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_0E95BFA5_2E87_BAB8_41A6_D9E31FA57371",
 "maps": [
  {
   "yaw": 2.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_5_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": 1.66,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 5)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4A8B81_2E9C_FB79_41B9_4C20F1C58885",
   "yaw": -3.99,
   "pitch": -1.27,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30A61CC7_2E85_DEF9_41A6_BF7FA35CA608",
 "maps": [
  {
   "yaw": -3.99,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_6_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.27,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4B5B81_2E9C_FB79_419D_BD208DB162B6",
   "yaw": -0.54,
   "pitch": -1.59,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3064B2DD_2E84_CA89_41C5_8DBC000DBDF3",
 "maps": [
  {
   "yaw": -0.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_7_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.59,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4B6B81_2E9C_FB79_41B1_B2E4002AFC2A",
   "yaw": 3.5,
   "pitch": -2.07,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30B38FDE_2E84_5A8B_4194_A6139D5D9DF4",
 "maps": [
  {
   "yaw": 3.5,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_8_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -2.07,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_0F4B2B81_2E9C_FB79_41B5_00A6CBB6967F",
   "yaw": 6.02,
   "pitch": -1.61,
   "hfov": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30B4CDA2_2E9C_7EBB_41B0_477A457AC933",
 "maps": [
  {
   "yaw": 6.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_9_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -1.61,
   "hfov": 0.55
  }
 ],
 "data": {
  "label": "Circle Generic 03"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42D0E514_5319_72EC_41C4_1876F6732CCF",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_4276A4F0_5319_7324_41D2_398D88C965AE",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_4202A4C1_5319_7364_41CC_99B8ADD247E6",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "MapViewer",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Floor Plan"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42FED51F_5319_7D1C_41B1_CE32EF9B283A",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_425844DE_5319_731C_41D3_BD83EC115ED5",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_412BB531_5319_7D24_41A8_811DCB583997",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_43DED4A3_5319_7324_41D2_22D627482AB0",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 2)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C368220_52FF_7724_4191_6316E6ED66D0",
   "yaw": -41.14,
   "pitch": -11.24,
   "hfov": 8.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C1CE6D7_52FB_7F6C_41A6_D0DCD3C6C014",
 "maps": [
  {
   "yaw": -41.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.24,
   "hfov": 8.62
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8, this.camera_42EF351A_5319_72E4_41C4_C6A819962F2B); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C36D220_52FF_7724_41BE_A4A529198460",
   "yaw": -122.34,
   "pitch": -9.44,
   "hfov": 8.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5C1CF6D7_52FB_7F6C_41D0_AA771D9CDF7F",
 "maps": [
  {
   "yaw": -122.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -9.44,
   "hfov": 8.67
  }
 ],
 "data": {
  "label": "Circle Arrow 01b Right-Up"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3, this.camera_42D09514_5319_72EC_41AB_D764E69D45DA); this.mainPlayList.set('selectedIndex', 9)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C350220_52FF_7724_41B3_3D605A421AEE",
   "yaw": 48.65,
   "pitch": -7.11,
   "hfov": 8.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5C1CD6D7_52FB_7F6C_41D3_26DC40C596B6",
 "maps": [
  {
   "yaw": 48.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -7.11,
   "hfov": 8.72
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E, this.camera_42B2E508_5319_72E4_41D1_72DA61E609C0); this.mainPlayList.set('selectedIndex', 1)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C35A220_52FF_7724_41C6_7DDFEA4D09C4",
   "yaw": -43.16,
   "pitch": -5.02,
   "hfov": 4.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FB48895_52F9_73EC_41CE_FD8F8F029462",
 "maps": [
  {
   "yaw": -43.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_1_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -5.02,
   "hfov": 4.38
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061, this.camera_42C1250E_5319_72FC_4193_471DA1E3D8CE); this.mainPlayList.set('selectedIndex', 8)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_5C35E220_52FF_7724_41CA_3FDE233698BF",
   "yaw": -134.19,
   "pitch": -6.84,
   "hfov": 8.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5FB4F896_52F9_73EC_41BA_5B1BFA866847",
 "maps": [
  {
   "yaw": -134.19,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_1_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.84,
   "hfov": 8.73
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_411D752B_5319_7D24_41CF_7A30D53E5A48",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_422AF4CD_5319_737C_41CB_4298424B813B",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_42A30502_5319_72E4_41CE_02717290B441",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_421F74C7_5319_736C_41B8_9B8CA0BDC353",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.viewer_uid43959491_5319_73E4_41CF_4686718688F6",
  {
   "scrollBarMargin": 2,
   "children": [
    "this.htmltext_4397C491_5319_73E4_41BC_38CB9DB287ED"
   ],
   "horizontalAlign": "left",
   "left": 0,
   "backgroundOpacity": 0.3,
   "paddingRight": 0,
   "right": 0,
   "borderRadius": 0,
   "minHeight": 20,
   "scrollBarWidth": 7,
   "backgroundColorRatios": [],
   "propagateClick": false,
   "bottom": 0,
   "paddingLeft": 0,
   "class": "Container",
   "overflow": "scroll",
   "verticalAlign": "bottom",
   "minWidth": 20,
   "scrollBarOpacity": 0.5,
   "backgroundColor": [],
   "scrollBarColor": "#FFFFFF",
   "height": "30%",
   "contentOpaque": true,
   "gap": 10,
   "paddingTop": 0,
   "scrollBarVisible": "rollOver",
   "backgroundColorDirection": "vertical",
   "borderSize": 0,
   "layout": "vertical",
   "paddingBottom": 0,
   "shadow": false,
   "data": {
    "name": "Container2919"
   }
  },
  "this.component_43A85491_5319_73E4_41D0_8E017D549FDF",
  "this.component_43A88491_5319_73E4_41A0_1EE17AF83D61"
 ],
 "id": "container_4395C491_5319_73E4_41CD_B1FAC218469A",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 20,
 "overflow": "scroll",
 "backgroundColorRatios": [],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container2918"
 }
},
{
 "maxHeight": 58,
 "maxWidth": 58,
 "id": "IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
 "width": 58,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "rollOverIconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB_rollover.png",
 "iconURL": "skin/IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "height": 58,
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "IconButton VR"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0, this.camera_43F754BB_5319_7324_41CD_00C694F1FB41); this.mainPlayList.set('selectedIndex', 4)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A38C30_2E9F_FD98_4199_0CE7F784CDE5",
   "yaw": 9.38,
   "pitch": -16.6,
   "hfov": 8.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B9D22B7_2EBC_CA98_41B3_765214AE800F",
 "maps": [
  {
   "yaw": 9.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_0_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -16.6,
   "hfov": 8.42
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5F429456_52F9_536C_41CF_12A13C169A6D, this.camera_422A94CD_5319_737C_41C6_0EF37551F379); this.mainPlayList.set('selectedIndex', 6)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A34C31_2E9F_FD98_419F_40917639A81A",
   "yaw": 94.07,
   "pitch": -6.68,
   "hfov": 8.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3A5EDD89_2EBC_FE89_41C5_501854585DF3",
 "maps": [
  {
   "yaw": 94.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_1_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -6.68,
   "hfov": 8.73
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_3C16462C_2D96_7A6B_41AE_F29343272087, this.camera_420254C1_5319_7364_41BA_4232BF8DA969); this.mainPlayList.set('selectedIndex', 10)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A32C31_2E9F_FD98_41C1_69807BAF4F50",
   "yaw": -89.17,
   "pitch": -11.71,
   "hfov": 8.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3BF1E4F5_2EBC_CE99_41BD_15F21823A792",
 "maps": [
  {
   "yaw": -89.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_2_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -11.71,
   "hfov": 8.61
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_5D00E351_52FB_7564_41D0_5C5184794BD8, this.camera_421F04C7_5319_736C_41C3_FAA0B01F1BC4); this.mainPlayList.set('selectedIndex', 7)"
  }
 ],
 "rollOverDisplay": false,
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_30A2EC31_2E9F_FD98_41C0_10EE66E91666",
   "yaw": 93.44,
   "pitch": -3.03,
   "hfov": 4.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3B32EB7C_2E85_FB8F_41C6_8EA7053DBBF6",
 "maps": [
  {
   "yaw": 93.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "levels": [
     {
      "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_3_0_0_map.gif",
      "width": 37,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "pitch": -3.03,
   "hfov": 4.39
  }
 ],
 "data": {
  "label": "Circle Arrow 01b"
 }
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_410D7525_5319_7D2C_41AD_D956B4936D22",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "restartMovementOnUserInteraction": false,
 "class": "PanoramaCameraSequence",
 "id": "sequence_43F784BB_5319_7324_41C2_449AA5182E71",
 "movements": [
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_in",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 323,
   "class": "DistancePanoramaCameraMovement",
   "easing": "linear",
   "yawSpeed": 7.96
  },
  {
   "yawDelta": 18.5,
   "class": "DistancePanoramaCameraMovement",
   "easing": "cubic_out",
   "yawSpeed": 7.96
  }
 ]
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_FC5C5513733A",
 "width": 110,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "top": "0%",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 110,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "button menu sup"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_EF7806FA_E38F_8606_41E5_5C4557EBCACB",
  "this.IconButton_EED073D3_E38A_9E06_41E1_6CCC9722545D",
  "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0"
 ],
 "id": "Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE",
 "width": "91.304%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": "0%",
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "85.959%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "data": {
  "name": "-button set"
 }
},
{
 "maxHeight": 272,
 "maxWidth": 668,
 "id": "Image_2041F0F4_2E8D_C69F_41B7_C1074AD35A4F",
 "left": "0%",
 "width": "39.965%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "url": "skin/Image_2041F0F4_2E8D_C69F_41B7_C1074AD35A4F.png",
 "borderRadius": 0,
 "minHeight": 1,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": "100%",
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_inside",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Image2826"
 }
},
{
 "maxHeight": 2,
 "maxWidth": 3000,
 "id": "Image_1B99DD00_16C4_0505_41B3_51F09727447A",
 "left": "0%",
 "right": "0%",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "backgroundOpacity": 0,
 "url": "skin/Image_1B99DD00_16C4_0505_41B3_51F09727447A.png",
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": true,
 "bottom": 53,
 "paddingLeft": 0,
 "class": "Image",
 "verticalAlign": "middle",
 "minWidth": 1,
 "height": 2,
 "paddingTop": 0,
 "borderSize": 0,
 "scaleMode": "fit_outside",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "white line"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Button_27296867_3022_82A2_4183_6455490B36CD",
  "this.Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
  "this.Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
  "this.Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
  "this.Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
  "this.Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0"
 ],
 "id": "Container_1B99BD00_16C4_0505_41A4_A3C2452B0288",
 "left": "0%",
 "width": 1199,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "propagateClick": true,
 "bottom": "0%",
 "paddingLeft": 30,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": 51,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 3,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-button set container"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
  "this.Container_23F027B7_0C0A_6293_418E_075FCFAA8A19"
 ],
 "shadowSpread": 1,
 "id": "Container_23F7B7B7_0C0A_6293_4197_F931EEC6FA48",
 "left": "10%",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "right": "10%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "top": "5%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "5%",
 "paddingLeft": 0,
 "overflow": "scroll",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA"
 ],
 "id": "Container_23F097B8_0C0A_629D_4176_D87C90BA32B6",
 "left": "10%",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "paddingRight": 20,
 "right": "10%",
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "5%",
 "propagateClick": false,
 "bottom": "80%",
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 20,
 "borderSize": 0,
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container X global"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
  "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0"
 ],
 "shadowSpread": 1,
 "id": "Container_39A197B1_0C06_62AF_419A_D15E4DDD2528",
 "left": "15%",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
  "this.MapViewer"
 ],
 "shadowSpread": 1,
 "id": "Container_2F8A6686_0D4F_6B71_4174_A02FE43588D3",
 "left": "15%",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC"
 ],
 "shadowSpread": 1,
 "id": "Container_2A193C4C_0D3B_DFF0_4161_A2CD128EF536",
 "left": "15%",
 "shadowColor": "#000000",
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": "15%",
 "shadowOpacity": 0.3,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "class": "Container",
 "shadowHorizontalLength": 0,
 "top": "7%",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "bottom": "7%",
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "shadowVerticalLength": 0,
 "contentOpaque": false,
 "borderSize": 0,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "layout": "vertical",
 "paddingBottom": 0,
 "shadow": true,
 "data": {
  "name": "Global"
 },
 "shadowBlurRadius": 25
},
{
 "viewerArea": "this.viewer_uid43959491_5319_73E4_41CF_4686718688F6",
 "id": "viewer_uid43959491_5319_73E4_41CF_4686718688F6PhotoAlbumPlayer",
 "class": "PhotoAlbumPlayer",
 "buttonNext": [
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510"
 ],
 "buttonPrevious": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482"
 ]
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A1CC30_2E9F_FD98_4189_27EFB21A59CC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A18C30_2E9F_FD98_418A_7B33C15F0216",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A16C30_2E9F_FD98_41C3_422591155A46",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264EFA23_2D6F_EA1D_41B2_D65060118ECC_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A0DC30_2E9F_FD98_41C3_5FDDF87FCC72",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BC1C2F_2E9F_FD88_41AE_0FE758A62111",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BFEC30_2E9F_FD98_419A_3A138ECFFB5C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_266B47EF_2D6E_59E4_4177_E21FBF6F9D4E_0_HS_6_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BF7C30_2E9F_FD98_41BD_17C8E1E18862",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A09C30_2E9F_FD98_418C_C1B6F4D321A6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A04C30_2E9F_FD98_41C3_AA769146DD3B",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26488B9A_2D6F_EA2F_417B_686F1EAAB5A0_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A02C30_2E9F_FD98_41B2_FE2AB0C3943A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3C16462C_2D96_7A6B_41AE_F29343272087_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_3C8757D9_2FAF_EA5D_41B8_1B7578C45517",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C375220_52FF_7724_41C6_8F963ABBEE54",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C37F220_52FF_7724_4187_7569443ECCE4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C362220_52FF_7724_414B_ED540E1EBBC0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5D00E351_52FB_7564_41D0_5C5184794BD8_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C367220_52FF_7724_41B5_93AD5709E474",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 1110
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C31D21F_52FF_771C_41D2_096307092988",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C30021F_52FF_771C_41C7_C16A6012D60A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C30A220_52FF_7724_41D2_89BB5885AE03",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C30E220_52FF_7724_41CB_BC585DB36354",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5F429456_52F9_536C_41CF_12A13C169A6D_1_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C373220_52FF_7724_41D4_3066DA62C6AC",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BF0C30_2E9F_FD98_41C6_1591634F027E",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_4_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BE9C30_2E9F_FD98_41BD_97766E95C2D3",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_264F1947_2D6F_B625_41A8_81C05FE1E4FD_0_HS_5_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30BE7C30_2E9F_FD98_41B1_7608236C3397",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_1_HS_0_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_3B154D1D_2E9C_5F89_41AE_A8C38AE4DD3C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_1_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4A4B80_2E9C_FB77_41B0_C55B8C545D36",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4A0B80_2E9C_FB77_41C2_A7CC424BA3CA",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4ADB81_2E9C_FB79_41C4_24B378E2F355",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4AEB81_2E9C_FB79_41C7_435CE3D6C645",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_5_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4ACB81_2E9C_FB79_41A2_CC87EC1DFB9C",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_6_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4A8B81_2E9C_FB79_41B9_4C20F1C58885",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_7_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4B5B81_2E9C_FB79_419D_BD208DB162B6",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_8_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4B6B81_2E9C_FB79_41B1_B2E4002AFC2A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_3FA5A985_2E8C_C779_41B8_4B75B2AA9240_0_HS_9_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 1500
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_0F4B2B81_2E9C_FB79_41B5_00A6CBB6967F",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C368220_52FF_7724_4191_6316E6ED66D0",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C36D220_52FF_7724_41BE_A4A529198460",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5C1C86D7_52FB_7F6C_41D0_C7BB1FCF9061_1_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C350220_52FF_7724_41B3_3D605A421AEE",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_1_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C35A220_52FF_7724_41C6_7DDFEA4D09C4",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5FB30895_52F9_73EC_41C8_04977AE95DF3_1_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_5C35E220_52FF_7724_41CA_3FDE233698BF",
 "colCount": 4
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "viewer_uid43959491_5319_73E4_41CF_4686718688F6",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "width": "100%",
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 50,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 100,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "toolTipBackgroundColor": "#F6F6F6",
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "borderSize": 0,
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": "1.11vmin",
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "ViewerArea2917"
 }
},
{
 "scrollBarMargin": 2,
 "id": "htmltext_4397C491_5319_73E4_41BC_38CB9DB287ED",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.7,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 0,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "paddingTop": 5,
 "scrollBarVisible": "rollOver",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "html": "",
 "paddingBottom": 5,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "data": {
  "name": "HTMLText2920"
 }
},
{
 "transparencyActive": false,
 "id": "component_43A85491_5319_73E4_41D0_8E017D549FDF",
 "left": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_left.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_AlbumPlayList, -1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "cursor": "hand",
 "data": {
  "name": "IconButton2921"
 }
},
{
 "transparencyActive": false,
 "id": "component_43A88491_5319_73E4_41A0_1EE17AF83D61",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "right": 10,
 "borderRadius": 0,
 "minHeight": 0,
 "top": "45%",
 "iconURL": "skin/album_right.png",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 0,
 "mode": "push",
 "click": "this.loadFromCurrentMediaPlayList(this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785_AlbumPlayList, 1)",
 "hideEffect": {
  "class": "FadeOutEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "visible": false,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 250
 },
 "cursor": "hand",
 "data": {
  "name": "IconButton2922"
 }
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_0_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A38C30_2E9F_FD98_4199_0CE7F784CDE5",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_1_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A34C31_2E9F_FD98_419F_40917639A81A",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_2_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A32C31_2E9F_FD98_41C1_69807BAF4F50",
 "colCount": 4
},
{
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_26481CC7_2D6F_AE25_41C5_E1F57BB41F39_0_HS_3_0.png",
   "width": 1220,
   "class": "ImageResourceLevel",
   "height": 780
  }
 ],
 "class": "AnimatedImageResource",
 "frameCount": 24,
 "rowCount": 6,
 "id": "AnimatedImageResource_30A2EC31_2E9F_FD98_41C0_10EE66E91666",
 "colCount": 4
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329",
 "width": 60,
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "iconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329.png",
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "toggle",
 "height": 60,
 "click": "if(!this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE.get('visible')){ this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, true, 0, null, null, false) } else { this.setComponentVisibility(this.Container_EF8F8BD8_E386_8E02_41E5_90850B5F0BBE, false, 0, null, null, false) }",
 "pressedIconURL": "skin/IconButton_EF8F8BD8_E386_8E02_41D6_310FF1964329_pressed.png",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": true,
 "data": {
  "name": "image button menu"
 }
},
{
 "iconWidth": 0,
 "id": "Button_27296867_3022_82A2_4183_6455490B36CD",
 "width": 100.7,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "rollOverShadow": false,
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "INICIO",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.mainPlayList.set('selectedIndex', 0)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B999D00_16C4_0505_41AB_D0C2E7857448",
 "width": 149.3,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "LISTA DE PANORAMAS",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, true, 0, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button panorama list"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B9A4D00_16C4_0505_4193_E0EA69B0CBB0",
 "width": 165.05,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "PLANO DEL CONJUNTO",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.showPopupImage(this.ImageResource_22A2DC90_306D_6012_41C1_A1E5502E73BD, null, '90%', '90%', this.FadeInEffect_22A2BC90_306D_6012_417E_A67B2508BBC8, this.FadeOutEffect_22A28C90_306D_6012_41BD_3838D6AFB565, {'rollOverIconWidth':20,'rollOverBorderSize':0,'pressedBorderColor':'#000000','pressedBackgroundOpacity':0.3,'pressedIconColor':'#888888','pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundOpacity':0.3,'rollOverBorderColor':'#000000','rollOverIconHeight':20,'borderSize':0,'rollOverIconLineWidth':5,'pressedBorderSize':0,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColorDirection':'vertical','pressedBackgroundColorDirection':'vertical','pressedIconLineWidth':5,'rollOverBackgroundOpacity':0.3,'iconHeight':20,'iconLineWidth':5,'paddingBottom':5,'borderColor':'#000000','paddingTop':5,'pressedIconHeight':20,'iconWidth':20,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundColorRatios':[0,0.09803921568627451,1],'paddingRight':5,'rollOverIconColor':'#666666','iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverBackgroundColorDirection':'vertical'}, null, null, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button floorplan"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B9A5D00_16C4_0505_41B0_D18F25F377C4",
 "width": 85.35,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "RENDERS",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.showPopupMedia(this.window_26B06E46_302D_9EE3_41C2_C28E105F1646, this.album_261E74CE_3025_83E2_41C6_BC97B5AAA785, this.playList_5F503ED1_52F7_CF64_41A0_07032FB6F43D, '90%', '90%', false, false)",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button photoalbum"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 32,
 "id": "Button_1B9A6D00_16C4_0505_4197_F2108627CC98",
 "width": 111.35,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "LOCALIZACI\u00d3N",
 "backgroundColor": [
  "#000000",
  "#000000"
 ],
 "click": "this.openLink('https://www.google.com.mx/maps/place/Aeropuerto+Internacional+de+Los+Cabos/@23.1579443,-109.712977,16.25z/data=!4m6!3m5!1s0x86af5b7bf0f2ab25:0xe9d861ed47ef00aa!8m2!3d23.1455358!4d-109.7182665!16zL20vMDYwcThm?entry=ttu', '_blank')",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button location"
 },
 "shadowBlurRadius": 15
},
{
 "iconWidth": 0,
 "id": "Button_1B998D00_16C4_0505_41AD_67CAA4AAEFE0",
 "width": 100.7,
 "pressedBackgroundOpacity": 1,
 "fontFamily": "Century Gothic",
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "borderColor": "#000000",
 "backgroundColorRatios": [
  0
 ],
 "rollOverShadow": false,
 "propagateClick": true,
 "rollOverBackgroundOpacity": 0.8,
 "paddingLeft": 0,
 "class": "Button",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "rollOverBackgroundColor": [
  "#04A3E1"
 ],
 "height": 40,
 "fontSize": 12,
 "label": "SITIO WEB ",
 "backgroundColor": [
  "#000000"
 ],
 "click": "this.openLink('https://www.jomacorp.org/', '_blank')",
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "shadowSpread": 1,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "rollOverBackgroundColorRatios": [
  0.01
 ],
 "fontWeight": "bold",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button house info"
 },
 "shadowBlurRadius": 15
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
  "this.Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0"
 ],
 "id": "Container_23F797B7_0C0A_6293_41A7_EC89DBCDB93F",
 "width": "85%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "-left"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
  "this.Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
  "this.Container_23F047B8_0C0A_629D_415D_F05EF8619564"
 ],
 "id": "Container_23F027B7_0C0A_6293_418E_075FCFAA8A19",
 "width": "50%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 1,
 "horizontalAlign": "left",
 "paddingRight": 50,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 50,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 460,
 "scrollBarOpacity": 0.51,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#0069A3",
 "height": "100%",
 "contentOpaque": false,
 "gap": 0,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "vertical",
 "paddingBottom": 20,
 "shadow": false,
 "data": {
  "name": "-right"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA",
 "width": "25%",
 "backgroundOpacity": 0,
 "horizontalAlign": "center",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_rollover.jpg",
 "iconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "middle",
 "minWidth": 50,
 "mode": "push",
 "height": "75%",
 "click": "this.setComponentVisibility(this.Container_23F0F7B8_0C0A_629D_418A_F171085EFBF8, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_23F087B8_0C0A_629D_4194_6F34C6CBE1DA_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "X"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
  "this.IconButton_38922473_0C06_2593_4199_C585853A1AB3"
 ],
 "id": "Container_3A67552A_0C3A_67BD_4195_ECE46CCB34EA",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "header"
 }
},
{
 "itemMinHeight": 50,
 "itemLabelPosition": "bottom",
 "itemLabelFontFamily": "Century Gothic",
 "id": "ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0",
 "rollOverItemThumbnailShadowColor": "#04A3E1",
 "itemBorderRadius": 0,
 "horizontalAlign": "center",
 "scrollBarWidth": 10,
 "rollOverItemLabelFontColor": "#04A3E1",
 "backgroundOpacity": 0.05,
 "width": "100%",
 "itemVerticalAlign": "top",
 "selectedItemThumbnailShadowBlurRadius": 16,
 "itemPaddingLeft": 3,
 "itemOpacity": 1,
 "minHeight": 1,
 "itemThumbnailOpacity": 1,
 "itemMinWidth": 50,
 "propagateClick": false,
 "paddingLeft": 70,
 "playList": "this.ThumbnailList_034EDD7A_0D3B_3991_41A5_D706671923C0_playlist",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#000000"
 ],
 "itemPaddingRight": 3,
 "itemBackgroundColor": [],
 "scrollBarColor": "#04A3E1",
 "selectedItemLabelFontColor": "#04A3E1",
 "itemBackgroundColorRatios": [],
 "itemPaddingTop": 3,
 "itemLabelGap": 7,
 "borderSize": 0,
 "scrollBarVisible": "rollOver",
 "height": "100%",
 "backgroundColorDirection": "vertical",
 "shadow": false,
 "itemHeight": 156,
 "selectedItemLabelFontWeight": "bold",
 "itemLabelTextDecoration": "none",
 "itemLabelFontWeight": "normal",
 "rollOverItemThumbnailShadowBlurRadius": 0,
 "rollOverItemThumbnailShadow": true,
 "itemLabelFontSize": 14,
 "itemThumbnailShadow": false,
 "paddingRight": 70,
 "itemThumbnailHeight": 125,
 "selectedItemThumbnailShadow": true,
 "borderRadius": 5,
 "itemThumbnailScaleMode": "fit_outside",
 "itemLabelFontColor": "#666666",
 "rollOverItemThumbnailShadowHorizontalLength": 8,
 "itemBackgroundColorDirection": "vertical",
 "backgroundColorRatios": [
  0
 ],
 "rollOverItemThumbnailShadowVerticalLength": 0,
 "class": "ThumbnailGrid",
 "itemBackgroundOpacity": 0,
 "itemHorizontalAlign": "center",
 "itemThumbnailWidth": 220,
 "itemWidth": 220,
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "itemMaxWidth": 1000,
 "itemPaddingBottom": 3,
 "gap": 26,
 "itemLabelFontStyle": "normal",
 "paddingTop": 10,
 "itemMaxHeight": 1000,
 "selectedItemThumbnailShadowVerticalLength": 0,
 "selectedItemThumbnailShadowHorizontalLength": 0,
 "paddingBottom": 70,
 "itemMode": "normal",
 "itemLabelHorizontalAlign": "center",
 "itemThumbnailBorderRadius": 0,
 "scrollBarMargin": 2,
 "data": {
  "name": "ThumbnailList"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
  "this.IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E"
 ],
 "id": "Container_2F8A7686_0D4F_6B71_41A9_1A894413085C",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "height": 140,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "header"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
  "this.IconButton_2A19BC4C_0D3B_DFF0_419F_D0DCB12FF482",
  "this.IconButton_2A19AC4C_0D3B_DFF0_4181_A2C230C2E510",
  "this.IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1"
 ],
 "id": "Container_2A19EC4C_0D3B_DFF0_414D_37145C22C5BC",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "visible",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container photo"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_23F787B7_0C0A_6293_419A_B4B58B92DAFC",
 "left": 0,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "playbackBarProgressBorderSize": 0,
 "right": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "toolTipFontStyle": "normal",
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "toolTipFontFamily": "Arial",
 "minHeight": 1,
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": 0,
 "playbackBarLeft": 0,
 "bottom": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer info 1"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.IconButton_23F7E7B7_0C0A_6293_419F_D3D84EB3AFBD",
  "this.Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
  "this.IconButton_23F037B7_0C0A_6293_41A2_C1707EE666E4"
 ],
 "id": "Container_23F7F7B7_0C0A_6293_4195_D6240EBAFDC0",
 "left": "0%",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "overflow": "scroll",
 "verticalAlign": "middle",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container arrows"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F017B8_0C0A_629D_41A5_DE420F5F9331",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 0,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "height": 60,
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "contentOpaque": false,
 "gap": 0,
 "paddingTop": 20,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "children": [
  "this.HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
  "this.Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145"
 ],
 "id": "Container_23F007B8_0C0A_629D_41A3_034CF0D91203",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 520,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 100,
 "scrollBarOpacity": 0.79,
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "scrollBarColor": "#E73B2C",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "vertical",
 "paddingBottom": 30,
 "shadow": false,
 "data": {
  "name": "Container text"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F047B8_0C0A_629D_415D_F05EF8619564",
 "width": 370,
 "scrollBarWidth": 10,
 "backgroundOpacity": 0.3,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "backgroundColorRatios": [
  0,
  1
 ],
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "backgroundColor": [
  "#FFFFFF",
  "#FFFFFF"
 ],
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": 40,
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container space"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_3918BF37_0C06_E393_41A1_17CF0ADBAB12",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 80,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Century Gothic';\">LISTA DE PANORAMAS</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_38922473_0C06_2593_4199_C585853A1AB3",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_39DE87B1_0C06_62AF_417B_8CB0FB5C9D15, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_38922473_0C06_2593_4199_C585853A1AB3_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_2F8A4686_0D4F_6B71_4183_10C1696E2923",
 "left": "0%",
 "width": "77.115%",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 100,
 "scrollBarWidth": 10,
 "top": "0%",
 "propagateClick": false,
 "paddingLeft": 80,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:4.96vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:4.96vh;font-family:'Century Gothic';\">LISTA DE PANORAMAS</SPAN></SPAN></DIV></div>",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "HTMLText54192"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E",
 "width": "100%",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "36.14%",
 "click": "this.setComponentVisibility(this.Container_2F8BB687_0D4F_6B7F_4190_9490D02FBC41, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2F8A5686_0D4F_6B71_41A1_13CF877A165E_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "toolTipFontWeight": "normal",
 "playbackBarRight": 0,
 "id": "ViewerAreaLabeled_2A198C4C_0D3B_DFF0_419F_C9A785406D9C",
 "left": "0%",
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 6,
 "width": "100%",
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderRadius": 0,
 "minHeight": 1,
 "playbackBarProgressBorderColor": "#000000",
 "toolTipFontFamily": "Arial",
 "toolTipFontStyle": "normal",
 "playbackBarHeadBorderColor": "#000000",
 "playbackBarHeadBorderRadius": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipShadowVerticalLength": 0,
 "paddingLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "progressLeft": 0,
 "minWidth": 1,
 "playbackBarBorderSize": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "toolTipFontColor": "#606060",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "borderSize": 0,
 "playbackBarHeadShadowColor": "#000000",
 "transitionDuration": 500,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "progressOpacity": 1,
 "height": "100%",
 "progressBarBackgroundColorDirection": "vertical",
 "firstTransitionDuration": 0,
 "shadow": false,
 "playbackBarHeadShadow": true,
 "progressBottom": 2,
 "progressHeight": 6,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipPaddingRight": 6,
 "toolTipBorderSize": 1,
 "vrPointerColor": "#FFFFFF",
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "progressBarOpacity": 1,
 "toolTipDisplayTime": 600,
 "progressBorderSize": 0,
 "paddingRight": 0,
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "progressBorderRadius": 0,
 "playbackBarBorderColor": "#FFFFFF",
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "transitionMode": "blending",
 "borderRadius": 0,
 "top": "0%",
 "playbackBarLeft": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "class": "ViewerArea",
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#0066FF",
 "progressBackgroundColorRatios": [
  0.01
 ],
 "progressBarBackgroundColorRatios": [
  0
 ],
 "toolTipBorderColor": "#767676",
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 0,
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "progressBorderColor": "#FFFFFF",
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "progressBackgroundColorDirection": "vertical",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "paddingTop": 0,
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipShadowColor": "#333333",
 "paddingBottom": 0,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "playbackBarBackgroundColorDirection": "vertical",
 "data": {
  "name": "Viewer photoalbum 1"
 }
},
{
 "maxHeight": 60,
 "maxWidth": 60,
 "id": "IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1",
 "width": "10%",
 "backgroundOpacity": 0,
 "horizontalAlign": "right",
 "paddingRight": 0,
 "right": 20,
 "borderRadius": 0,
 "minHeight": 50,
 "rollOverIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_rollover.jpg",
 "top": 20,
 "iconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1.jpg",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "IconButton",
 "verticalAlign": "top",
 "minWidth": 50,
 "mode": "push",
 "height": "10%",
 "click": "this.setComponentVisibility(this.Container_2A1A5C4D_0D3B_DFF0_41A9_8FC811D03C8E, false, 0, null, null, false)",
 "pressedIconURL": "skin/IconButton_2A19CC4C_0D3B_DFF0_41AA_D2AC34177CF1_pressed.jpg",
 "paddingTop": 0,
 "borderSize": 0,
 "paddingBottom": 0,
 "shadow": false,
 "cursor": "hand",
 "transparencyActive": false,
 "data": {
  "name": "IconButton X"
 }
},
{
 "scrollBarMargin": 2,
 "id": "Container_23F7D7B7_0C0A_6293_4195_312C9CAEABE4",
 "width": "80%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "horizontalAlign": "left",
 "paddingRight": 0,
 "borderRadius": 0,
 "minHeight": 1,
 "overflow": "scroll",
 "propagateClick": false,
 "paddingLeft": 0,
 "class": "Container",
 "verticalAlign": "top",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "30%",
 "scrollBarColor": "#000000",
 "contentOpaque": false,
 "gap": 10,
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "layout": "absolute",
 "paddingBottom": 0,
 "shadow": false,
 "data": {
  "name": "Container separator"
 }
},
{
 "scrollBarMargin": 2,
 "id": "HTMLText_23F067B8_0C0A_629D_41A9_1A1C797BB055",
 "width": "100%",
 "scrollBarWidth": 10,
 "backgroundOpacity": 0,
 "paddingRight": 10,
 "borderRadius": 0,
 "minHeight": 1,
 "propagateClick": false,
 "paddingLeft": 10,
 "class": "HTMLText",
 "minWidth": 1,
 "scrollBarOpacity": 0.5,
 "height": "100%",
 "scrollBarColor": "#04A3E1",
 "scrollBarVisible": "rollOver",
 "paddingTop": 0,
 "borderSize": 0,
 "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:7.37vh;font-family:'Bebas Neue Bold';\">___</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.35vh;font-family:'Bebas Neue Bold';\">Lorem ipsum</SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:6.35vh;font-family:'Bebas Neue Bold';\">dolor sit amet</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:3.05vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#04a3e1;font-size:3.05vh;font-family:'Bebas Neue Bold';\">consectetur adipiscing elit. Morbi bibendum pharetra lorem, accumsan san nulla.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:0.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\">Mauris aliquet neque quis libero consequat vestibulum. Donec lacinia consequat dolor viverra sagittis. Praesent consequat porttitor risus, eu condimentum nunc. Proin et velit ac sapien luctus efficitur egestas ac augue. Nunc dictum, augue eget eleifend interdum, quam libero imperdiet lectus, vel scelerisque turpis lectus vel ligula. Duis a porta sem. Maecenas sollicitudin nunc id risus fringilla, a pharetra orci iaculis. Aliquam turpis ligula, tincidunt sit amet consequat ac, imperdiet non dolor.</SPAN></DIV><p STYLE=\"margin:0; line-height:0.89vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\">Integer gravida dui quis euismod placerat. Maecenas quis accumsan ipsum. Aliquam gravida velit at dolor mollis, quis luctus mauris vulputate. Proin condimentum id nunc sed sollicitudin.</SPAN></DIV><p STYLE=\"margin:0; line-height:2.41vh;\"><BR STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:2.41vh;font-family:'Bebas Neue Bold';\"><B>Donec feugiat:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nisl nec mi sollicitudin facilisis </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Nam sed faucibus est.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Ut eget lorem sed leo.</SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Sollicitudin tempor sit amet non urna. </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0vh;color:#000000;font-size:0.89vh;font-family:Arial, Helvetica, sans-serif;\"> \u2022 Aliquam feugiat mauris sit amet.</SPAN></DIV></div>",
 "paddingBottom": 20,
 "shadow": false,
 "data": {
  "name": "HTMLText"
 }
},
{
 "fontFamily": "Bebas Neue Bold",
 "height": "9%",
 "id": "Button_23F057B8_0C0A_629D_41A2_CD6BDCDB0145",
 "width": "46%",
 "pressedBackgroundOpacity": 1,
 "pressedBackgroundColorRatios": [
  0
 ],
 "backgroundOpacity": 0.7,
 "shadowColor": "#000000",
 "horizontalAlign": "center",
 "paddingRight": 0,
 "iconHeight": 32,
 "borderRadius": 0,
 "minHeight": 1,
 "backgroundColorRatios": [
  0
 ],
 "propagateClick": false,
 "rollOverBackgroundOpacity": 1,
 "paddingLeft": 0,
 "class": "Button",
 "borderColor": "#000000",
 "verticalAlign": "middle",
 "minWidth": 1,
 "mode": "push",
 "backgroundColor": [
  "#04A3E1"
 ],
 "fontSize": "3vh",
 "label": "lorem ipsum",
 "shadowSpread": 1,
 "pressedBackgroundColor": [
  "#000000"
 ],
 "fontStyle": "normal",
 "paddingTop": 0,
 "gap": 5,
 "backgroundColorDirection": "vertical",
 "borderSize": 0,
 "layout": "horizontal",
 "paddingBottom": 0,
 "shadow": false,
 "iconBeforeLabel": true,
 "iconWidth": 32,
 "fontWeight": "normal",
 "textDecoration": "none",
 "cursor": "hand",
 "fontColor": "#FFFFFF",
 "data": {
  "name": "Button"
 },
 "shadowBlurRadius": 6
}],
 "backgroundPreloadEnabled": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "propagateClick": true,
 "paddingLeft": 0,
 "class": "Player",
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "height": "100%",
 "contentOpaque": false,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "buttonToggleFullscreen": "this.IconButton_EEFF957A_E389_9A06_41E1_2AD21904F8C0",
 "paddingBottom": 0,
 "shadow": false,
 "defaultVRPointer": "laser",
 "scripts": {
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getKey": function(key){  return window[key]; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "registerKey": function(key, value){  window[key] = value; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; }
 },
 "downloadEnabled": true,
 "data": {
  "name": "Player468"
 },
 "layout": "absolute"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
