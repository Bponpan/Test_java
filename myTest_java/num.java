package myTest_java;
public class num {
    public static void main(String[] args) {

        for (int i = 2; i <= 100; i += 2) {
            System.out.print(i);

            if (i < 100 - 1) {
                System.out.print(",");
            }
        }
    }
}
