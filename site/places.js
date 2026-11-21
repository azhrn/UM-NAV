// Marker coordinates use the SVG viewBox, measured from its top-left corner.
const floors = [{ id: 'b1', name: 'Block B · Floor 1', map: 'maps/block-b-1.svg', width: 1130, height: 520 }];
const places = [
  ['dk1','DK1','Dewan Kuliah 1',315,386], ['dk2','DK2','Dewan Kuliah 2',181,221],
  ['bt2','BT2','Bilik Tutorial 2',210,417], ['bt3','BT3','Bilik Tutorial 3',101,324],
  ['bt5','BT5','Bilik Tutorial 5',72,190], ['mm3','MM3','Makmal Mikro 3',305,147],
  ['mm5','MM5','Makmal Mikro 5',537,76], ['mm6','MM6','Makmal Mikro 6',855,149],
  ['mr','MR','Meeting Room',890,392], ['tech','','Bilik Teknikal',510,308],
  ['lecturers-upper','','Lecturer Rooms (upper on map)',855,78],
  ['lecturers-lower','','Lecturer Rooms (lower on map)',890,290],
  ['main','','Main Entrance',694,428], ['block-a','','Exit to Block A',868,208],
  ['exit','','Exit',395,442], ['pondok','','Pondok',700,373],
  ['stairs-upper','','Stairs (upper on map)',394,62], ['stairs-lower','','Stairs (lower on map)',528,397],
  ['mens','','Men’s Toilet',537,149], ['ladies','','Ladies’ Toilet',510,250]
].map(([id,code,name,x,y]) => ({ id: 'b1-'+id, floor: 'b1', code,name,x,y }));
