// Function to toggle navbar on smaller screens
$('.menu').click(function () {
  $('.mainNav ul').toggleClass('active');
});

// Animate scrolling
$('#homeNav').click(function() {
  let first = $('#first-section').position().top;

  $('html, body').animate(
    {
      scrollTop: first
    },
    2500
  );
});

$('#togetherNav').click(function() {
  let second = $('#second-section').position().top;

  $('html, body').animate(
    {
      scrollTop: second
    },
    2500
  );
});

$('#haveNav').click(function() {
  let third = $('#third-section').position().top;

  $('html, body').animate(
    {
      scrollTop: third
    },
    2500
  );
});

$('#goalNav').click(function() {
  let fourth = $('#fourth-section').position().top;

  $('html, body').animate(
    {
      scrollTop: fourth
    },
    2500
  );
});

$('#membersNav').click(function() {
  let fifth = $('#fifth-section').position().top;

  $('html, body').animate(
    {
      scrollTop: fifth
    },
    2500
  );
});
