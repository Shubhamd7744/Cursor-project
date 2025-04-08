import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Card } from '@/components/ui/card';

interface SlideData {
  content: string;
  imageUrl?: string;
  backgroundColor?: string;
}

interface CarouselPreviewProps {
  slides: SlideData[];
}

const CarouselPreview: React.FC<CarouselPreviewProps> = ({ slides }) => {
  return (
    <Card className="p-4">
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className="w-full aspect-video bg-muted rounded-md"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div 
              className="flex items-center justify-center h-full p-8 text-center"
              style={{ backgroundColor: slide.backgroundColor || 'inherit' }}
            >
              <p className="text-lg">{slide.content}</p>
              {/* TODO: Add image rendering when imageUrl is available */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Card>
  );
};

export default CarouselPreview;
