import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function FounderChatsSection() {
  const chatImages = [
    PlaceHolderImages.find((img) => img.id === 'founder-chat-1'),
    PlaceHolderImages.find((img) => img.id === 'founder-chat-2'),
    PlaceHolderImages.find((img) => img.id === 'founder-chat-3'),
    PlaceHolderImages.find((img) => img.id === 'founder-chat-4'),
  ].filter(Boolean);

  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 rounded-lg bg-primary p-3 text-center">
          <h2 className="text-3xl font-bold text-primary-foreground">
            Straight From the Founders We Helped
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {chatImages.map((image) => (
            image && (
              <div key={image.id} className="flex justify-center">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  width={350}
                  height={550}
                  className="rounded-lg shadow-xl"
                  data-ai-hint={image.imageHint}
                />
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
}
