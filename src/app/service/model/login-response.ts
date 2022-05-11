export interface Worker {
    id: string;
    userId: string;
    capacity: number;
    duration: number;
    startDate: Date;
    endDate?: any;
    title: string;
    photo: string;
    totalDays: number;
    purchase: number;
    earnByMonth: number;
    earnByDay: number;
    isStarted: boolean;
    totalEarned: number;
}

export interface LoginResponseData {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    displayName: string;
    phoneNumber: string;
    country: string;
    city: string;
    walletAddress: string;
    email: string;
    password?: string;
    confirmPassword?: string;
    totalCapacity: number;
    totalPurchase: number;
    totalTrading: number;
    totalMining: number;
    totalCarding: number;
    totalEarnByDay: number;
    totalEarnByMonth: number;
    workers: Worker[];
    totalDays: number;
    totalEarned: number;
    totalPaied: number;
    totalToPay: number;
    history?: string;
    transactions?: string;
    userName: string;
    locked: boolean;
    miningPercentage: number;
    tradingPercentage: number;
    cardPercentage: number;
    tradingType: number;
    changedDate: Date;
    createDate?: Date;
}

export interface LoginResponse {
    success: boolean;
    error?: string;
    data: LoginResponseData;
    status?: string;
}