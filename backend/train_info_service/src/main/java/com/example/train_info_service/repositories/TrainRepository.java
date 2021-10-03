package com.example.train_info_service.repositories;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.example.train_info_service.models.Train;

public interface TrainRepository extends MongoRepository<Train, String> {
	@Query("{'startStation': ?0, 'endStation': ?1}")
	List<Train> findBySort(String startStation, String endStation, String date);

}