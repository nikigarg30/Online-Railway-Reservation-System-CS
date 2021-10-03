package com.example.train_info_service.controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.train_info_service.models.Train;
import com.example.train_info_service.repositories.TrainRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/trains")
public class TrainController
{
	private TrainRepository trainRepository;

	@Autowired
	public TrainController (TrainRepository trainRepository) {
		this.trainRepository = trainRepository;
	}
	
	@GetMapping("{trainid}")
	public Optional<Train> getTrain(@PathVariable String trainid){
		return trainRepository.findById(trainid);
	}
	
	@PostMapping("/addTrain")
	public String saveTrain(@RequestBody Train trainid) {
	trainRepository.save(trainid);
	return "Added train with id :  " + trainid.getTrainid();
	}
	
	@DeleteMapping("/delete/{trainid}")
	public String deleteTrain (@PathVariable String trainid) {
		trainRepository.deleteById(trainid);
		return "Train deleted with id : "+trainid;
    }
	
	@PutMapping("/update/{trainid}")
	public Train updateTrain(@PathVariable("trainid") String trainid,@RequestBody Train t ) {
		t.setTrainid(trainid);
		trainRepository.save(t);
		return t;	
}
}
