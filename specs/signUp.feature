Feature: Sign up error

Scenario: I want to sign up to the app
Given I am on the register page
When I Type "user@email.com" in the register email field
And I type "user" in the register username field 
And I type "password12345" in the password field
And I type "password1234" in the confirm password field
And I click the register button
Then I should see an error message
  