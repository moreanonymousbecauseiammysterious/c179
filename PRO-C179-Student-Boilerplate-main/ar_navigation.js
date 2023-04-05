let coordinates = {}

$(document).ready(function(){
    getCoordinates()
})

function getCoordinates(){
    let sourceParams = new URLsearchParams(window.location.search)
    if(searchParams.has("source") && searchParams.has("destination")){
        let source = searchParams.get("source")
        let destination = searchParams.get("destination")
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lon = source.split(";")[1]
        coordinates.source_lat = destination.split(";")[0]
        coordinates.source_lon = destination.split(";")[1]
    }
    else{
        alert("coordinates not found")
        window.history.back();
    }
}