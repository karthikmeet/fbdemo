package org.stepdefinition;

import java.util.List;
import java.util.Map;

import org.pagerepository.LoginPageRepo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class LoginStepdef {
	LoginPageRepo lp = new LoginPageRepo();

	@Given("^Open Facebook and launch the application$")
	public void open_facebook_and_launch_the_application() {

	}

	@When("^Enter the Username and Password$")
	public void enter_the_Username_and_Password() {

	}

	@Then("^Close the browser$")
	public void close_the_browser(DataTable dt3) {
		List<Map<String, String>> maps = dt3.asMaps();

		System.out.println(maps.get(0).get("Sno"));
		System.out.println(maps.get(0).get("Name"));
		
		
		System.out.println(maps.get(1).get("Sno"));
		System.out.println(maps.get(1).get("Name"));
		
		System.out.println(maps.get(2).get("Sno"));
		System.out.println(maps.get(2).get("Name"));
		
	}
}