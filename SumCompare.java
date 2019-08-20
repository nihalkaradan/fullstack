class SumCompare{
	public static void main(String[] args) {
		int a=Integer.parseInt(args[0]);
		int b=Integer.parseInt(args[1]);
		int c=Integer.parseInt(args[2]);
		boolean flag=true;

		if(a<40)flag=false;
		if(b<40)flag=false;
		if(c<40)flag=false;
		if((a+b+c)<125)flag=false;
		if(flag){
			System.out.println("PASSING");
		}
		if(!flag){
			System.out.println("FAILING");
		}
		

		// if(a>=40&&b>=40&&c>=40&&(a+b+c)>=125){
		// 	System.out.println("PASSING");
		// }
		// if(!(a>=40&&b>=40&&c>=40&&(a+b+c)>=125)){
		// 	System.out.println("FAILING");
		// }

	}
}