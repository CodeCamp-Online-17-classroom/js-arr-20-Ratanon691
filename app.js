function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}
ask(`Do you Agree?`, function(){ alert(`Yes, I agree`)}, function(){ alert(`Whyyyyy?`)})
