package com.example.train_info_service.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.train_info_service.models.Train;
import com.example.train_info_service.repositories.TrainRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/search")
public class UserController
{
	private TrainRepository trainRepository;

	@Autowired
	public UserController (TrainRepository trainRepository) {
		this.trainRepository = trainRepository;
	}
	
	@GetMapping("/findAllTrains")
	public List<Train> getTrains()
	{
		return trainRepository.findAll();
	}
	
	@RequestMapping(value="/{startStation}/{endStation}/{date}",method=RequestMethod.GET)
	public List<Train> getdetailsByDestination(@PathVariable("startStation") String startStation,
			@PathVariable("endStation") String endStation, @PathVariable("date") String date){
		return trainRepository.findBySort(startStation,endStation,date);
	}
}
