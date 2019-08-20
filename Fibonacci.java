class Fibbonaci{
	public static void main(String[] args) {
		int first=1;
		int second=1;
		System.out.print(first+","+second+",");
		int third=first+second;
		while(third<=89){
			// third=first+second;
			System.out.print(third+",");
			
			first=second;
			second=third;
			third=first+second;
		}
	}
}