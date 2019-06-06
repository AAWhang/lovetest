$(document).ready(function()
{
var flavor = $("input:radio[name=flavor]:checked").val();
var answer1 = 0;
function addshit() {
  answer1 += parseInt($("input:radio[name=question1]:checked").val());
  answer1 += parseInt($("input:radio[name=question2]:checked").val());
  answer1 += parseInt($("input:radio[name=question3]:checked").val());
}

$("button#celebrity").click(function() {
  alert("yes");
  answer1 += parseInt($("input:radio[name=question1]:checked").val());
  answer1 += parseInt($("input:radio[name=question2]:checked").val());
  answer1 += parseInt($("input:radio[name=question3]:checked").val());
  alert(answer1);
  answer1 = 0;

  });
});
