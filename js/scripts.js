//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.accounts = [];
}

function BankAccount(initial, deposit, withdrawal, balance) {
  this.initial = initial;
  this.deposit = deposit;
  this.withdrawal = withdrawal;
  this.balance = balance;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

BankAccount.prototype.fullAccount = function() {
  return this.initial + ", " + this.deposit + ", " + this.withdrawal + "," + this.balance;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-initial").val("");
    $("input.new-deposit").val("");
    $("input.new-withdrawal").val("");
    $("input.new-balance").val("");
}

// user interface logic
$(document).ready(function() {

  $("form#new-contact").submit(function(event) {
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $(".new-account").each(function() {
      var inputtedInitial = $(this).find("input.new-initial").val();
      var inputtedDeposit = $(this).find("input.new-deposit").val();
      var inputtedWithdrawal = $(this).find("input.new-withdrawal").val();
      var inputtedBalance = $(this).find("input.new-balance").val();
      var newAccount = new BankAccount(inputtedInitial, inputtedDeposit, inputtedWithdrawal, inputtedBalance);
      newContact.accounts.push(newAccount)
    });
    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");



    $(".contact").last().click(function() {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.fullName());
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $("ul#accounts").text("");
      newContact.accounts.forEach(function(BankAccount) {
        $("ul#accounts").append("<li>" + BankAccount.fullAccount() + "</li>");
      });
    });

    resetFields();

  });
});
