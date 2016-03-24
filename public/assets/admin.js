$(document).ready(function() {
  var currentDate = new Date();

  var dateTime = $("h1.datetime");
  var dateString = currentDate.toDateString();
  dateTime.text(dateString);

  // For responsive sidebar menu
  $("a.sidebar-toggle").click(function() {
    $('.ui.sidebar').sidebar('toggle');
  });

  switch(getPage()) {
    case "dashboard":
      setupDoughnut();
      break;
    case "products":
      setupProducts();
      break;
    case "sales":
      setupSalesLine();
      break;
    case "employees":
      setupNewEmployeeModal();
      setupCardDimmer();
      break;
    case "gallery":
      setupRatings();
      break;
    case "customers":
      setupAccordions();
      break;
  }

  function getPage() {
    return $("body").data("page");
  }
  
});
