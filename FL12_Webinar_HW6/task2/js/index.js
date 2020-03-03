const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];

$(function () {
  $add.on('click', (e) => {
    e.preventDefault();
    if($input.val() !== '') {
      $list.append("<li class='item'>" + "<span class='item-text'>" + 
      $input.val() + "</span>" + 
      "<button class='item-remove'>Remove</button>" + "</li>");
      $(function () {
        $('.item-remove').on('click', (event) => {
        $removeTask = ($(event.currentTarget).closest('.item').find('.item-text'))
        $removeTask.addClass('done');
        completed($removeTask,todos);
      })
    })
    }
    updateList();
    $input.val('');
  })
})
  
$(function () {
  $('.item-remove').on('click', (event) => {
  $removeTask = ($(event.currentTarget).closest('.item').find('.item-text'))
  $removeTask.addClass('done');
  completed($removeTask,todos);
  })
})

function completed (removeTask,todos) {
  todos.forEach((el) => {
    if(el.text === removeTask.text()) {
      el.done = true;
    }
  })
}
function updateList () {
  todos.push({
    text: $input.val(),
    done: false
  })
}