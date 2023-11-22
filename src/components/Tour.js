import Tour from './Tour';
{tours.map((tour) => (
  <Tour key={tour.id} {...tour} />
)}

