export class CreateAppointmentDto {
    client_id: number;
    professional_id: number;
    appointment_date: string; // formato: 'YYYY-MM-DD'
    start_time: string; // formato: 'HH:mm'
    end_time: string; // formato: 'HH:mm'
    status?: string;
}
