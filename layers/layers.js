var wms_layers = [];

var format_bayrakli_yapi_0 = new ol.format.GeoJSON();
var features_bayrakli_yapi_0 = format_bayrakli_yapi_0.readFeatures(json_bayrakli_yapi_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bayrakli_yapi_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bayrakli_yapi_0.addFeatures(features_bayrakli_yapi_0);
var lyr_bayrakli_yapi_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bayrakli_yapi_0, 
                style: style_bayrakli_yapi_0,
                popuplayertitle: 'bayrakli_yapi',
                interactive: true,
    title: 'bayrakli_yapi<br />\
    <img src="styles/legend/bayrakli_yapi_0_0.png" /> AKARYAKIT ISTASYONU<br />\
    <img src="styles/legend/bayrakli_yapi_0_1.png" /> DINI TESIS<br />\
    <img src="styles/legend/bayrakli_yapi_0_2.png" /> MESKEN<br />\
    <img src="styles/legend/bayrakli_yapi_0_3.png" /> RESMI<br />\
    <img src="styles/legend/bayrakli_yapi_0_4.png" /> SPOR TESISLERI<br />\
    <img src="styles/legend/bayrakli_yapi_0_5.png" /> TICARI<br />\
    <img src="styles/legend/bayrakli_yapi_0_6.png" /> <br />' });
var format_bayrakli_yol_1 = new ol.format.GeoJSON();
var features_bayrakli_yol_1 = format_bayrakli_yol_1.readFeatures(json_bayrakli_yol_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bayrakli_yol_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bayrakli_yol_1.addFeatures(features_bayrakli_yol_1);
var lyr_bayrakli_yol_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bayrakli_yol_1, 
                style: style_bayrakli_yol_1,
                popuplayertitle: 'bayrakli_yol',
                interactive: true,
    title: 'bayrakli_yol<br />\
    <img src="styles/legend/bayrakli_yol_1_0.png" /> D300<br />\
    <img src="styles/legend/bayrakli_yol_1_1.png" /> D550<br />\
    <img src="styles/legend/bayrakli_yol_1_2.png" /> <br />' });
var format_bayrakli_otobus_durak_2 = new ol.format.GeoJSON();
var features_bayrakli_otobus_durak_2 = format_bayrakli_otobus_durak_2.readFeatures(json_bayrakli_otobus_durak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bayrakli_otobus_durak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bayrakli_otobus_durak_2.addFeatures(features_bayrakli_otobus_durak_2);
var lyr_bayrakli_otobus_durak_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bayrakli_otobus_durak_2, 
                style: style_bayrakli_otobus_durak_2,
                popuplayertitle: 'bayrakli_otobus_durak',
                interactive: true,
                title: '<img src="styles/legend/bayrakli_otobus_durak_2.png" /> bayrakli_otobus_durak'
            });

lyr_bayrakli_yapi_0.setVisible(true);lyr_bayrakli_yol_1.setVisible(true);lyr_bayrakli_otobus_durak_2.setVisible(true);
var layersList = [lyr_bayrakli_yapi_0,lyr_bayrakli_yol_1,lyr_bayrakli_otobus_durak_2];
lyr_bayrakli_yapi_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Entity': 'Entity', 'Handle': 'Handle', 'Layer': 'Layer', 'LyrFrzn': 'LyrFrzn', 'LyrOn': 'LyrOn', 'Color': 'Color', 'Linetype': 'Linetype', 'Elevation': 'Elevation', 'LineWt': 'LineWt', 'RefName': 'RefName', 'DocUpdate': 'DocUpdate', 'DocId': 'DocId', 'Z_Mean': 'Z_Mean', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_bayrakli_yol_1.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', 'ref': 'ref', 'oneway': 'oneway', 'maxspeed': 'maxspeed', 'layer': 'layer', 'bridge': 'bridge', 'tunnel': 'tunnel', });
lyr_bayrakli_otobus_durak_2.set('fieldAliases', {'osm_id': 'osm_id', 'code': 'code', 'fclass': 'fclass', 'name': 'name', });
lyr_bayrakli_yapi_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Entity': 'TextEdit', 'Handle': 'TextEdit', 'Layer': 'TextEdit', 'LyrFrzn': 'TextEdit', 'LyrOn': 'TextEdit', 'Color': 'TextEdit', 'Linetype': 'TextEdit', 'Elevation': 'TextEdit', 'LineWt': 'TextEdit', 'RefName': 'TextEdit', 'DocUpdate': 'DateTime', 'DocId': 'TextEdit', 'Z_Mean': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_bayrakli_yol_1.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', 'ref': 'TextEdit', 'oneway': 'TextEdit', 'maxspeed': 'Range', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'tunnel': 'TextEdit', });
lyr_bayrakli_otobus_durak_2.set('fieldImages', {'osm_id': 'TextEdit', 'code': 'Range', 'fclass': 'TextEdit', 'name': 'TextEdit', });
lyr_bayrakli_yapi_0.set('fieldLabels', {'OBJECTID': 'no label', 'Entity': 'no label', 'Handle': 'no label', 'Layer': 'no label', 'LyrFrzn': 'no label', 'LyrOn': 'no label', 'Color': 'no label', 'Linetype': 'no label', 'Elevation': 'no label', 'LineWt': 'no label', 'RefName': 'no label', 'DocUpdate': 'no label', 'DocId': 'no label', 'Z_Mean': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_bayrakli_yol_1.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'no label', 'ref': 'inline label - always visible', 'oneway': 'no label', 'maxspeed': 'no label', 'layer': 'no label', 'bridge': 'no label', 'tunnel': 'no label', });
lyr_bayrakli_otobus_durak_2.set('fieldLabels', {'osm_id': 'no label', 'code': 'no label', 'fclass': 'no label', 'name': 'inline label - always visible', });
lyr_bayrakli_otobus_durak_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});