var tasks = [];
var completed= [];

$(document).ready(function() {
  tasks = JSON.parse(localStorage.getItem("tasks"));
  if (tasks == null) {
    tasks = [];
  }
  for (var i = 0; i < tasks.length; i++) {
    $("ul#tasks-list").append("<li><span class='task'>"+tasks[i].name+"</span> <span class='task-complete'>Complete</span></li>");
  }

  $("form#tasks-form").submit(function(event) {
    event.preventDefault();

    var name = $("input#task").val();

    var newTask = {name: name};
    tasks.push(newTask);

    $("ul#tasks-list").append("<li><span class='task'>"+newTask.name+"</span><span class='task-complete'>Complete</span></li>");

    $(".task").last().click(function() {
      $(".show-task").show();
      for (var counter=0, length = tasks.length; counter<length; counter++) {
        if (newTask.name === tasks[counter].name) {
          $("#span-name").text(newTask.name);
        }
      }
    });
    $(".task-complete").last().click(function() {
      debugger;
      // var newTask = $(".complete-name").val();
      completed.push(newTask);
      $(".completed").append(newTask.name + "<br>");

      tasks.splice(this.find[newTask]);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
    localStorage.setItem("completed", JSON.stringify(completed));
    });
});
