'use client';

import { useEffect, useState } from 'react';
import { updateSeatCount } from '@/ai/flows/dynamic-seat-counter';
import { Loader2 } from 'lucide-react';

const DUMMY_APPLICATIONS_DATA = JSON.stringify([
  { applicantId: '001', seats: 2 },
  { applicantId: '002', seats: 1 },
  { applicantId: '003', seats: 5 },
  { applicantId: '004', seats: 1 },
  { applicantId: '005', seats: 3 },
  { applicantId: '006', seats: 2 },
  { applicantId: '007', seats: 1 },
  { applicantId: '008', seats: 1 },
  { applicantId: '009', seats: 4 },
  { applicantId: '010', seats: 1 },
]);
const TOTAL_SEATS = 30;

export function DynamicSeatCounter() {
  const [availableSeats, setAvailableSeats] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchSeatCount() {
      setIsLoading(true);
      try {
        const result = await updateSeatCount({
          applicationsData: DUMMY_APPLICATIONS_DATA,
          totalSeats: TOTAL_SEATS,
        });
        setAvailableSeats(result.availableSeats);
      } catch (error) {
        console.error('Failed to update seat count:', error);
        // Fallback in case of AI error
        setAvailableSeats(9); // Some reasonable fallback
      } finally {
        setIsLoading(false);
      }
    }
    fetchSeatCount();
  }, []);

  return (
    <div className="mt-8 h-10 text-center">
      {isLoading ? (
        <div className="flex items-center justify-center gap-2 text-sm font-semibold text-muted-foreground animate-fade-in">
          <Loader2 className="h-4 w-4 animate-spin" />
          Checking available seats...
        </div>
      ) : availableSeats !== null && availableSeats > 0 ? (
        <div className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-semibold text-primary animate-fade-in sm:text-base">
          🔥 Only{' '}
          <span className="font-extrabold">{availableSeats}</span> seats
          left for this cohort. Join now!
        </div>
      ) : (
        <p className="font-bold text-destructive animate-fade-in">
          This cohort is full. Join the waitlist!
        </p>
      )}
    </div>
  );
}
