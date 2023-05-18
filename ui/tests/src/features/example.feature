@dev
Feature: Example

  Scenario: Should give an example when
    Given a logged in user
    When they are on the "dashboard" page
    Then the "title" "text" is visible
    And the "save" "button" is not visible
