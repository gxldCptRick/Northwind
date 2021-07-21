using System;
using Northwind.Web.Models;

namespace Northwind.Web.Services
{
	public interface IWeatherForecastService 
	{
		WeatherForecast ForecastFor(DateTime dateTime);

		string SummaryFor(int temperature);
	}


	public class WeatherForecastService : IWeatherForecastService
	{
		private const string MildSummary = "Mild";
		private static readonly string[] Summaries = new[]
		{
				"Freezing", "Bracing", "Chilly", "Cool", MildSummary, "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
		};

		public WeatherForecast ForecastFor(DateTime dateTime)
		{
			if(dateTime < DateTime.Now){
				throw new ArgumentException("Cannot get forecast for past date.");
			}
			
			var rng = new Random();
			var temperatureC = rng.Next(1, 55);
			return new WeatherForecast
			{
					Date = dateTime,
					TemperatureC = temperatureC,
					Summary = SummaryFor(temperatureC)
			};
		}

		public string SummaryFor(int temperature)
		{	// Given more requirements would definitely rewrite this
			// Currently only told about the Mild req of 70F which is roughly ~21.1 C
			if(temperature >= 21){
				return MildSummary;
			}

			var rng = new Random();
			return Summaries[rng.Next(Summaries.Length)];
		}
	}

}