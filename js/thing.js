function resize() {
    var size = $('#size').val() + 'px';
    $('#text').css('font-size', size);
}
$(document).ready(() => {
    $('#size').on('change', resize);
    resize();
});
