package sit.int221.sas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sit.int221.sas.entities.Announcement;
import sit.int221.sas.services.AnnouncementService;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:4173/"})
@RestController
@RequestMapping("/api/announcements")
public class AnnouncementController {
    @Autowired
    private AnnouncementService service;

    @GetMapping
    public ResponseEntity<List<Announcement>> getAllAnnouncements() {
        List<Announcement> announcementList = service.findAll();
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        if (announcementList.isEmpty()) {
            responseHeaders.set("Description", "no announcement data");
        } else {
            responseHeaders.set("Description", "get all announcements successfully");
        }

        return ResponseEntity.ok().headers(responseHeaders).body(announcementList);
    }

    @GetMapping("{id}")
    public ResponseEntity<Announcement> getAnnouncementById(@PathVariable Integer id) {
        Announcement announcement = service.findById(id);
        HttpHeaders responseHeaders = new HttpHeaders();
        responseHeaders.set("Content-Type", "application/json");
        responseHeaders.set("Description", "get an announcement successfully");
        return ResponseEntity.ok().headers(responseHeaders).body(announcement);
    }

    @PostMapping
    public Announcement postAnnouncement(@RequestBody Announcement announcement) {
        System.out.println(announcement);
        return service.createAnnouncement(announcement);
    }
}

