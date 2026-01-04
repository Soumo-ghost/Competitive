//1390. Four Divisors
int sumFourDivisors(int* nums, int numsSize) {
    int a = 0;
    int hold = 0;
    int r = 0;
    for (int i = 0; i < numsSize; i++) {
        for (int j = 2; j <= (nums[i] / 2); j++) {
            if (nums[i] % j == 0) {
                a++;
                hold = hold + j;
                if (a > 5) {
                    break;
                }
            }
        }
        if (a == 2) {
            r = r + hold + 1 + nums[i];
            a = 0;
            hold = 0;
        } else {
            a = 0;
            hold = 0;
        }
    }
    return r;
}