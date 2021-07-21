using System;
using Northwind.Web.Services;
using Xunit;
using Xunit.Gherkin.Quick;

namespace Northwind.Test.Steps
{
    [FeatureFile("./Features/WeatherForecast.Summary.feature")]
    public sealed class WeatherForecastSummaryFeature: Feature
    {
        private IWeatherForecastService _weather = null;
        private int _tempature_in_c = 0;
		private string _summary = null;

        private int ConvertFahrenheitToCelsius(int tempInFarenheit){
            // it won't be the most accurate but this is close enough for this toy example
            return (int) Math.Round((tempInFarenheit - 32) * 5d/9);
        }

		[Given(@"the weather forecast service")]
		public void The_weather_forecast_service()
		{
			_weather = new WeatherForecastService();
		}

        [When(@"I get the summary for temperature of (\d+) F")]
        public void when_i_get_the_summary_For_tempature_of(int temperature){
            _summary = _weather.SummaryFor(ConvertFahrenheitToCelsius(temperature));
        }

        [Then(@"the summary should be (\w+)")]
		public void the_summary_should_be(string summary)
		{
			Assert.Equal(summary, _summary);
		}
    }
}