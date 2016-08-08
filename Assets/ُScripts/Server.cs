using UnityEngine;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net.Sockets;
using System.Threading;
using System.IO;


public class Server : MonoBehaviour { private bool mRunning;

	private bool doorShouldOpen = false;
	private bool doorShouldClose = false;
	string msg = "";
	Thread mThread;
	TcpListener tcp_Listener = null;
	void Start()
	{
		mRunning = true;
		ThreadStart ts = new ThreadStart(SayHello);
		mThread = new Thread(ts);
		mThread.Start();
		print("Thread done...");
	}

	void Update(){
		if (doorShouldOpen) {
			GameObject.FindGameObjectWithTag ("door").GetComponent<Animation> ().Play ("Open");
			doorShouldOpen = false;
		}
		if (doorShouldClose) {
			GameObject.FindGameObjectWithTag ("door").GetComponent<Animation> ().Play ("Close");
			doorShouldClose = false;
		}
	}
	public void stopListening()
	{
		mRunning = false;
	}
	void SayHello()
	{
		try
		{
			tcp_Listener = new TcpListener(12345);
			tcp_Listener.Start();
			print("Server Start");
			while (mRunning)
			{
				//print("hi");
				// check if new connections are pending, if not, be nice and sleep 100ms
				if (!tcp_Listener.Pending())
				{
					Thread.Sleep(100);
				}
				else
				{
					print("1");
					TcpClient client = tcp_Listener.AcceptTcpClient();
					print("2");
					NetworkStream ns = client.GetStream();
					print("3");
					StreamReader reader = new StreamReader(ns);
					print("4");
					while(msg!="exit"){
					msg = reader.ReadLine();
					print(msg);
						if(msg=="doorOpen"){
							doorShouldOpen=true;
						}
						if(msg =="doorClose"){
							doorShouldClose=true;
						}
					}
					reader.Close();
					client.Close();
					print("done");
				}
			}
		}
		catch (ThreadAbortException)
		{
			print("exception");
		}
		finally
		{
			mRunning = false;
			tcp_Listener.Stop();
		}
	}
	void OnApplicationQuit()
	{
		// stop listening thread
		stopListening();
		// wait fpr listening thread to terminate (max. 500ms)
		mThread.Join(500);
	}

} 