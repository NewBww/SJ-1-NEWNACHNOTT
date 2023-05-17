package sit.int221.sas.controllers;

import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = {"http://localhost:5173/", "http://localhost:4173/", "http://ip22sj1.sit.kmutt.ac.th/", "http://intproj22.sit.kmutt.ac.th/sj1/"})
@RestController
@RequestMapping("/api/counts")
public class AnnouncementViewCounterController {
    private static final Map<Integer, Integer> counter = new HashMap<>();

    @GetMapping("{id}")
    public Integer getCount(@PathVariable Integer id) {
        return Optional.ofNullable(counter.get(id)).orElse(0);
    }

    @PostMapping("{id}")
    public Integer addCount(@PathVariable Integer id) {
        Integer currentCount = Optional.ofNullable(counter.get(id)).orElse(0);
        counter.put(id, ++currentCount);
        return counter.get(id);
    }
}
