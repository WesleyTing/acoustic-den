function cloneAndPlay(audioNode) {
    var clone = audioNode.cloneNode(true);
    clone.play();
}
$("#string-E1").on('click', function() {
    cloneAndPlay(E1);
});
$("#string-B2").on('click', function() {
    cloneAndPlay(B2);
});
$("#string-G3").on('click', function() {
    cloneAndPlay(G3);
});
$("#string-D4").on('click', function() {
    cloneAndPlay(D4);
});
$("#string-A5").on('click', function() {
    cloneAndPlay(A5);
});
$("#string-E6").on('click', function() {
    cloneAndPlay(E6);
});