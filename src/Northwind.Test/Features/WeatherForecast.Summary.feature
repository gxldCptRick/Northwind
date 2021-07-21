Feature: Get Weather Forecast Summary
	To get summary for tempuratures in Celsius 

Scenario: Get Correct Summary for Hotter Temp
	Given the weather forecast service
	When I get the summary for temperature of 70 F
	Then the summary should be Mild