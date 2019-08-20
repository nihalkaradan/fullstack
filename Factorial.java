//Write a java program that calculates factorial of a number entered at runtime

class Factorial{
	public static void main(String[] args) {
		int k=1;
		int f=Integer.parseInt(args[0]);
		for(int i=1;i<=f;i++){
			k*=i;
		}
		System.out.println("Factorial of "+args[0]+" : "+k);
	}
}