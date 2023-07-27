Feature: Example

  # Defines which environment to run the tests in
  @dev
  Scenario: Should give an example when
    # Standard example of a keyword
    Given a logged in user

    # Example of a mock api call
    # This will match the user profile from config/mocks.json with the api endpoint from config/hosts.json and use json_payloads/user as the user's profile
    When the "user profile" endpoint for "api" is mocked with "user"

    # Example of a keyword with a variable
    # This will match the dashboard route defined in config/pages.json
    When on the "dashboard" page

    # Example of a keyword with multiple variables
    Then the "title" "text" is visible

    # Example of a keyword using negation and no negation
    # The visibility assertion can be used to test whether something is visible or not
    And the "save" "button" is not visible
    Then the "date selector" "dashboard" is visible

    # Example of a keyword using negation and no negation
    # The state assertion can be used to test whether something is visible or not
    And the "save" "button" is not enabled
    # Example of using the But keyword
    But the "save" "button" is enabled

